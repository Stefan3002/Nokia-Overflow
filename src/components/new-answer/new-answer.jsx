import './new-answer.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import {useNavigate} from "react-router";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {useState} from "react";
import {setAddAnswerOpened, setLoading} from "../../utils/store/utils-store/utils-actions";
import categoriesOptionsStub from "../../utils/data-stubs/question-categories.json";
import closeIcon from "../../utils/imgs/app/icons/CloseIcon.svg";
import SearchInput from "../search-input/search-input";
import Editor from "@monaco-editor/react";
import Button from "../button/button";
import {getOpenedQuestionId} from "../../utils/store/utils-store/utils-selectors";

const NewAnswer = () => {
    const questionId = useSelector(getOpenedQuestionId)
    const userData = useSelector(getUser)
    const nav = useNavigate()
    const sendRequest = useHttpReq()
    const dispatch = useDispatch()
    const [code, setCode] = useState(undefined)
    const closeCreateAnswer = () => {
        dispatch(setAddAnswerOpened(false))
    }

    const categoriesOptions = categoriesOptionsStub.categoriesOptions

    const createAnswer = async (event) => {
        event.preventDefault()
        const title = event.target[0].value
        const description = event.target[1].value
        const selectedIndex = event.target[2].selectedIndex
        const date = Date.now()
        console.log(code)
        const newAnswer = {
            user: {
                uid: userData.uid,
                photoURL: userData.photoURL,
                displayName: userData.displayName
            },
            answerTitle: title,
            answerDetails: description,
            code,
        }
        const res = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/answers/${questionId}`, 'POST', JSON.stringify(newAnswer), false, false, 'Answer successfully created!')
        dispatch(setAddAnswerOpened(false))
        window.location.reload(true)
        // nav(`/app/trending`)
    }
    const setLoadingTrue = () => {
        dispatch(setLoading(true))
    }
    const setLoadingFalse = () => {
        dispatch(setLoading(false))
    }


    return (
        <div className='new-answer-container'>
            <div className="new-answer-header">
                <img className='new-answer-icon' onClick={closeCreateAnswer} src={closeIcon} alt="Close"/>
            </div>
            <h2>New Answer</h2>
            <form onSubmit={createAnswer} className="new-answer-forms" action=''>
                <SearchInput placeholder='Title of the answer' borderColor='black' borderSize='1'/>
                <SearchInput placeholder='Description of the answer' borderColor='black' borderSize='1'/>
                <Editor beforeMount={setLoadingTrue} onMount={setLoadingFalse} onChange={code => setCode(code)}
                        width='70%' height='50vh' language='javascript' defaultValue='Insert code here.'/>
                <Button type='submit' text='Create answer' borderSize='1' borderColor='black' textColor='black'/>
            </form>
        </div>
    )
}
export default NewAnswer