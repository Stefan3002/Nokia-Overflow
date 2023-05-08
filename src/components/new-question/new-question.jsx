import './new-question.css'
import {useDispatch, useSelector} from "react-redux";
import {setLoading, setQuestionOpened} from "../../utils/store/utils-store/utils-actions";
import closeIcon from '../../utils/imgs/app/icons/CloseIcon.svg'
import SearchInput from "../search-input/search-input";
import Button from "../button/button";
import SelectInput from "../select-input/select-input";
import categoriesOptionsStub from '../../utils/data-stubs/question-categories.json'
import Editor from "@monaco-editor/react";
import {useState} from "react";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {getUser} from "../../utils/store/user-store/user-selectors";
import {useNavigate} from "react-router";

const NewQuestion = () => {
    const userData = useSelector(getUser)
    const nav = useNavigate()
    const sendRequest = useHttpReq()
    const dispatch = useDispatch()
    const [code, setCode] = useState(undefined)
    const closeCreateQuestion = () => {
        dispatch(setQuestionOpened(false))
    }

    const categoriesOptions = categoriesOptionsStub.categoriesOptions

    const createQuestion = async (event) => {
        event.preventDefault()
        const title = event.target[0].value
        const description = event.target[1].value
        const selectedIndex = event.target[2].selectedIndex
        const category = event.target[2][selectedIndex].innerText
        const labels = event.target[5].value
        const date = Date.now()
        console.log(code)
        const newQuestion = {
            user: {
                uid: userData.uid,
                photoURL: userData.photoURL,
                displayName: userData.displayName
            },
            questionTitle: title,
            questionContent: description,
            likes: 0,
            dislikes: 0,
            date: '',
            category,
            code,
            questionLabels: labels.split(',')
        }
        try {
            const res = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions`, 'POST', JSON.stringify(newQuestion))
        } catch (err) {
            console.log(err)
        }
        nav(`/app/trending`)
    }
    const setLoadingTrue = () => {
        dispatch(setLoading(true))
    }
    const setLoadingFalse = () => {
        dispatch(setLoading(false))
    }


    return (
        <div className='new-question-container'>
            <div className="new-question-header">
                <img className='new-question-icon' onClick={closeCreateQuestion} src={closeIcon} alt="Close"/>
            </div>
            <h2>New Nok</h2>
            <form onSubmit={createQuestion} className="new-question-forms" action=''>
                <SearchInput placeholder='Title of the Nok' borderColor='black' borderSize='1' />
                <SearchInput placeholder='Description of the Nok' borderColor='black' borderSize='1' />
                <SelectInput options={categoriesOptions} borderSize='1' borderColor='black' />
                <Editor beforeMount={setLoadingTrue} onMount={setLoadingFalse} onChange={code => setCode(code)}
                        width='70%' height='50vh' language='javascript' defaultValue='Insert code here.'/>
                <SearchInput placeholder='Input many labels, comma separated!' borderColor='black' borderSize='1'/>
                <Button type='submit' text='Create Nok' borderSize='1' borderColor='black' textColor='black'/>
            </form>
        </div>
    )
}
export default NewQuestion