import './my-questions.css'
import Question from "../../question/question";

const MyQuestions = ({numberOfQuestions, questions}) => {
    return (
        <div className="my-questions-container">
            {
                questions.map((question, idx) => {
                    if (idx < numberOfQuestions)
                        return <Question questionData={question}/>
                    else
                        return null
                })
            }
        </div>
    )
}
export default MyQuestions