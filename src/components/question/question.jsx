import './question.css'
import questionConfig from './question-config.json'
import Button from "../button/button";
import LikeIcon from '../../utils/imgs/app/icons/LikeIcon.svg'
import Divider from "../divider/divider";
import PinIcon from '../../utils/imgs/app/icons/PinIcon.svg'
const Question = ({questionData}) => {
    const {questionTitle, questionContent, likes, dislikes, date} = questionData
    return (
        <div className='question-container'>
            <div className="question-top">
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
                <div className="question-top-right">
                    <h4>{questionTitle}</h4>
                    <Divider />
                    <p className='question-content'>{questionContent.slice(0, questionConfig.questionCharsLimit)} {questionContent.length > questionConfig.questionCharsLimit ? "Read more!" : null}</p>
                </div>
            </div>
            <div className="question-bottom">
                <p>{date}</p>
                <div className="question-bottom-right">

                </div>
                <img className='question-icon' src={PinIcon} alt="Pin"/>
            </div>
        </div>
    )
}
export default Question