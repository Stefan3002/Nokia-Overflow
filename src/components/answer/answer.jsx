import './answer.css'
import SmallProfileImage from "../small-profile-image/small-profile-image";
import {useEffect} from "react";
import codeHighlighter from "../../utils/scripts/codeHighlighter";
const Answer = ({data}) => {
    const {user, answerTitle, answerDetails} = data

    useEffect(() => {
        codeHighlighter()
    }, [data])

    return (
        <div className='answer-container'>
            <h3>{answerTitle}</h3>
            <p className='answer-details-container'>{answerDetails}</p>
            <div className="answer-user-data">
                <SmallProfileImage photoURL={user.photoURL} />
                <p>{user.displayName}</p>
            </div>
        </div>
    )
}
export default Answer