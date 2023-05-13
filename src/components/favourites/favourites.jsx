import './favourites.css'
import Question from "../question/question";
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";

const Favourites = ({myQuestions}) => {
    const userData = useSelector(getUser)
    let favouriteQuestions
    if (!myQuestions)
        favouriteQuestions = userData.favorites
    else
        favouriteQuestions = userData.questions
    return (
        <div>
            <div className='favourites-container'>

                <div className="favourites-header">
                    <div className="favourites-header-top">
                        {/*<h2>Trending</h2>*/}
                    </div>
                    <div className="favourites-header-bottom">
                    </div>
                </div>
                <div className="favourites-questions">
                    {favouriteQuestions && favouriteQuestions.map((favouriteQuestion, idx) => {
                        return <Question key={favouriteQuestion.questionID} detailed={true}
                                         questionData={favouriteQuestion} animationDelay={idx * 100}/>
                    })}
                </div>

            </div>
        </div>
    )
}
export default Favourites