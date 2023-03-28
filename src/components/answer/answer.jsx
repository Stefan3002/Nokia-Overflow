import './answer.css'
import SmallProfileImage from "../small-profile-image/small-profile-image";
import {useEffect} from "react";
import codeHighlighter from "../../utils/scripts/codeHighlighter";
import Editor from "@monaco-editor/react";
const Answer = ({data}) => {
    const {user, answerTitle, answerDetails, code} = data

    useEffect(() => {
        codeHighlighter()
    }, [data])

    return (
        <div className='answer-container'>
            <h3>{answerTitle}</h3>
            <p className='answer-details-container'>{answerDetails}</p>
            {code ? <Editor height='30vh' defaultValue={code} /> : null}
            <div className="answer-user-data">
                <SmallProfileImage photoURL={user.photoURL} />
                <p>{user.displayName}</p>
            </div>
        </div>
    )
}
export default Answer