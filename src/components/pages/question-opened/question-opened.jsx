import './question-opened.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxData from "./parallax-data-question-opened.json";
import ParallaxImg from "../../../utils/imgs/app/Headers/QuestionOpenedBanner.jpg";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Divider from "../../divider/divider";
import ProfileImage from "../../profile-image/profile-image";
import Button from "../../button/button";
import Answers from "../../answers/answers";
import Editor from "@monaco-editor/react";
import LikeIcon from "../../../utils/imgs/app/icons/LikeIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import {setAddAnswerOpened, setLoading, setOpenedQuestionId} from "../../../utils/store/utils-store/utils-actions";
import Labels from "../../labels/labels";
import {useHttpReq} from "../../../utils/scripts/fetches/fetches";
import trashSVG from "../../../utils/imgs/app/icons/Trash.svg";
import {getUser} from "../../../utils/store/user-store/user-selectors";

const QuestionOpened = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [question, setQuestion] = useState(null)
    const sendRequest = useHttpReq()
    const userData = useSelector(getUser)

    useEffect(() => {
        (async () => {
            const questionData = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/${params.id}`)
            setQuestion(questionData)
        })()
    }, [])

    const setLoadingTrue = () => {
        dispatch(setLoading(true))
    }
    const setLoadingFalse = () => {
        dispatch(setLoading(false))
    }

    const openAddAnswer = () => {
        dispatch(setAddAnswerOpened(true))
        dispatch(setOpenedQuestionId(params.id))
    }
    const deleteQuestion = async () => {
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/${params.id}`, 'DELETE', false, false, 'Deleted successfully!')
    }

    if (question) {
        const {likes, dislikes, questionLabels} = question
        return (
            <>
                <Parallax dynamicTitle={question.questionTitle} linkTo='categories' showButton={false}
                          parallaxData={ParallaxData} img={ParallaxImg}
                          height='40vh'/>

                <div className='question-opened-container'>
                    <div className="user-info">
                        <ProfileImage photoURL={question.user.photoURL}/>
                        <div className="right-user-container">
                            <p className='user-name'>{question.user.displayName}</p>
                            {question.user.uid === userData.uid &&
                                <p onClick={deleteQuestion}><img className='question-opened-icon' src={trashSVG}
                                                                 alt=""/></p>}

                            <div className="labels-container-scrollable">
                                <Labels fewItems={false} labels={questionLabels}/>
                            </div>
                        </div>
                    </div>

                    <div className="question-opened-header">
                        <h2 className='question-opened-title'>{question.questionTitle}</h2>
                        <div className="question-opened-metrics">
                            <div className="question-likes">
                                <p className='question-likes-text'>{likes}</p>
                                <img className='question-icon' src={LikeIcon} alt="Likes"/>
                            </div>
                            <div className="question-dislikes">
                                <p className='question-dislikes-text'>{dislikes}</p>
                                <img className='question-icon dislike-icon' src={LikeIcon} alt="Dislikes"/>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <p>{question.questionContent}</p>
                    {question.code ? <Editor beforeMount={setLoadingTrue} onMount={setLoadingFalse} height='30vh' defaultValue={question.code} /> : null}
                    <Button marginTop='1rem' text='Add answer' textColor='black' borderColor='var(--accent-color)'
                            borderSize='2' clickHandler={openAddAnswer}/>
                    <Divider/>
                    <Answers data={question.answers} />
                </div>
            </>
        )
    }
    else
        return null
}
export default QuestionOpened