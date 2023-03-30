import './my-questions.css'
import Question from "../../question/question";
const MyQuestions = ({numberOfQuestions, questions}) => {
    return (
        <div className="my-questions-container">
            {
                questions.map((question, idx) => {
                    return  <Question questionData={question} />
                })
            }
        </div>
    )
}
export default MyQuestions