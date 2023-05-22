import './question.css'
import questionConfig from './question-config.json'
import LikeIcon from '../../utils/imgs/app/icons/LikeIcon.svg'
import Divider from "../divider/divider";
import PinIcon from '../../utils/imgs/app/icons/PinIcon.svg'
import EmptyPinIcon from '../../utils/imgs/app/icons/EmptyHeart.svg'
import CategoryIcon from "../category-icon/category-icon";
import {Link} from "react-router-dom";
import Labels from "../labels/labels";
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import trashSVG from '../../utils/imgs/app/icons/Trash.svg'

const Question = ({high, detailed, questionData, animationDelay}) => {
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
    const userData = useSelector(getUser)
    const sendRequest = useHttpReq()
    const deleteQuestion = async () => {
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/${questionID}`, 'DELETE')
    }
    const alreadyIn = () => {
        let alreadyIn = false
        for (let favourite of userData.favorites)
            if (questionID === favourite.questionID) {
                alreadyIn = true
                break
            }
        return alreadyIn
    }

    const addRemoveToFavourites = async () => {
        if (!alreadyIn()) {
            const userInfo = {
                userID: userData.uid,
                postID: questionID
            }
            await sendRequest(`${process.env.REACT_APP_SERVER_URL}/favorite`, 'POST', JSON.stringify(userInfo), false, false, 'Added to favorites!')
        } else {
            await sendRequest(`${process.env.REACT_APP_SERVER_URL}/favorite/${questionID}/${userData.uid}`, 'DELETE', null, false, false, 'Removed from favorites!')
        }
    }

    const sendLike = async () => {
        const data = {
            postID: questionID,
            userID: userData.uid,
            valLike: 1
        }
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/like`, 'POST', JSON.stringify(data), false, false, 'Like received!')
    }
    const sendDislike = async () => {
        const data = {
            postID: questionID,
            userID: userData.uid,
            valLike: -1
        }
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/like`, 'POST', JSON.stringify(data), false, false, 'Dislike received!')
    }

    if (!high)
        return (
            <div className="question-outer-container">

                <div style={{animationDelay: `${animationDelay}ms`}} className='question-container'>
                    <div className="question-top-left">
                        <div className="question-likes">
                            <p className='question-likes-text'>{likes}</p>
                            <img onClick={sendLike} className='question-icon' src={LikeIcon} alt="Like"/>
                        </div>
                        <div className="question-dislikes">
                            <p className='question-dislikes-text'>{dislikes}</p>
                            <img onClick={sendDislike} className='question-icon dislike-icon' src={LikeIcon}
                                 alt="Dislike"/>
                        </div>
                    </div>
                    <Link to={`/app/question/${questionID}`}>

                        <div className="question-top">

                            <div className="question-top-right">
                                <h4 className='question-title'>{questionTitle}</h4>
                                {questionLabels ? <Labels fewItems={true} labels={questionLabels}/> : null}
                                <Divider/>
                                {detailed ?
                                    <p className='question-content'>{questionContent.slice(0, questionConfig.questionCharsLimit)} {questionContent.length > questionConfig.questionCharsLimit ? "Read more!" : null}</p> : null}
                            </div>
                        </div>
                    </Link>
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
                            {user.uid === userData.uid &&
                                <img onClick={deleteQuestion} className='question-icon' src={trashSVG} alt=""/>}
                            {alreadyIn() ?
                                <img onClick={addRemoveToFavourites} className='question-icon' src={PinIcon}
                                     alt="Pin"/> :
                                <img onClick={addRemoveToFavourites} className='question-icon' src={EmptyPinIcon}
                                     alt="Pin"/>}
                        </div>
                    </div>
                </div>

            </div>

        )
    else
        return (
            <div className="question-outer-container-high">
                <div className="question-left-high">
                    <div className="question-user-data-high">
                        <img className='user-question-img-high' src={user.photoURL} alt=""/>
                        <p>{user.displayName}</p>
                    </div>
                    <div className="question-bottom-right">
                        <p>{date}</p>
                        <div className="question-bottom-left">
                            <CategoryIcon cat={category}/>
                        </div>
                        {user.uid === userData.uid &&
                            <img onClick={deleteQuestion} className='question-icon' src={trashSVG} alt=""/>}
                        {alreadyIn() ?
                            <img onClick={addRemoveToFavourites} className='question-icon' src={PinIcon} alt="Pin"/> :
                            <img onClick={addRemoveToFavourites} className='question-icon' src={EmptyPinIcon}
                                 alt="Pin"/>}
                        <div className="question-likes">
                            <p className='question-likes-text'>{likes}</p>
                            <img onClick={sendLike} className='question-icon' src={LikeIcon} alt="Like"/>
                        </div>
                        <div className="question-dislikes">
                            <p className='question-dislikes-text'>{dislikes}</p>
                            <img onClick={sendDislike} className='question-icon dislike-icon' src={LikeIcon}
                                 alt="Dislike"/>
                        </div>
                    </div>
                    <div className="question-top-left">

                    </div>
                </div>
                <div style={{animationDelay: `${animationDelay}ms`}} className='question-container-high'>

                    <Link to={`/app/question/${questionID}`}>

                        <div className="question-top-high">

                            <div className="question-top-right-high">
                                <h4 className='question-title'>{questionTitle}</h4>
                                {questionLabels ? <Labels light={true} fewItems={true} labels={questionLabels}/> : null}
                                <Divider/>
                                {detailed ?
                                    <p className='inverse-high question-content'>{questionContent.slice(0, questionConfig.questionCharsLimit)} {questionContent.length > questionConfig.questionCharsLimit ? "Read more!" : null}</p> : null}
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        )


}

export default Question