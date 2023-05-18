import './my-questions.css'
import Question from "../../question/question";

const MyQuestions = ({numberOfQuestions, questions, detailed}) => {
    return (
        <div className="my-questions-container">
            {
                questions.map((question, idx) => {
                    if (idx < numberOfQuestions)
                        return <Question detailed={detailed} questionData={question}/>
                    else
                        return null
                })
            }
        </div>
    )
}
export default MyQuestions