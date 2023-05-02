import './question.css'
import questionConfig from './question-config.json'
import LikeIcon from '../../utils/imgs/app/icons/LikeIcon.svg'
import Divider from "../divider/divider";
import PinIcon from '../../utils/imgs/app/icons/PinIcon.svg'
import CategoryIcon from "../category-icon/category-icon";
import {Link} from "react-router-dom";
import Labels from "../labels/labels";

const Question = ({detailed, questionData, animationDelay}) => {
    const {
        questionTitle,
        questionContent,
        likes,
        dislikes,
        date,
        category,
        questionID,
        questionLabels,
        user
    } = questionData
    return (
        <Link to={`/app/question/${questionID}`}>
            <div style={{animationDelay: `${animationDelay}ms`}} className='question-container'>
                <div className="question-top-left">
                    <div className="question-likes">
                        <p className='question-likes-text'>{likes}</p>
                        <img className='question-icon' src={LikeIcon} alt="Likes"/>
                    </div>
                    <div className="question-dislikes">
                        <p className='question-dislikes-text'>{dislikes}</p>
                        <img className='question-icon dislike-icon' src={LikeIcon} alt="Dislikes"/>
                    </div>
                </div>
                <div className="question-top">

                    <div className="question-top-right">
                        <h4 className='question-title'>{questionTitle}</h4>
                        {questionLabels ? <Labels fewItems={true} labels={questionLabels}/> : null}
                        <Divider/>
                        {detailed ?
                            <p className='question-content'>{questionContent.slice(0, questionConfig.questionCharsLimit)} {questionContent.length > questionConfig.questionCharsLimit ? "Read more!" : null}</p> : null}
                    </div>
                </div>
                <div className="question-bottom">
                    <div className="question-bottom-left">
                        <CategoryIcon cat={category}/>
                    </div>
                    <div className="question-bottom-user-data">
                        <img className='user-question-img' src={user.photoURL} alt=""/>
                        <p>{user.displayName}</p>
                    </div>
                    <div className="question-bottom-right">
                        <p>{date}</p>
                        <img className='question-icon' src={PinIcon} alt="Pin"/>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Question