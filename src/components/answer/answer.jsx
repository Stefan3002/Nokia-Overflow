import './answer.css'
import SmallProfileImage from "../small-profile-image/small-profile-image";
import {useEffect} from "react";
import codeHighlighter from "../../utils/scripts/codeHighlighter";
import Editor from "@monaco-editor/react";
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import trashSVG from '../../utils/imgs/app/icons/Trash.svg'
import {useHttpReq} from "../../utils/scripts/fetches/fetches";

const Answer = ({data}) => {
    const userData = useSelector(getUser)
    const {user, answerTitle, answerDetails, code, answerID} = data
    const sendRequest = useHttpReq()

    useEffect(() => {
        codeHighlighter()
    }, [data])
    console.log(user.uid, userData.uid)

    const deleteAnswer = async () => {
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/answers/${answerID}`, 'DELETE', null, false, false, 'Answer deleted!')
    }


    return (
        <div className='answer-container'>
            <h3>{answerTitle}</h3>
            <p className='answer-details-container'>{answerDetails}</p>
            {code ? <Editor height='30vh' defaultValue={code}/> : null}
            <div className="answer-user-data">
                <SmallProfileImage photoURL={user.photoURL}/>
                <p>{user.displayName}</p>
                {user.uid === userData.uid &&
                    <img onClick={deleteAnswer} className='answer-icon' src={trashSVG} alt="Delete"/>}
            </div>
        </div>

    )
}
export default Answer