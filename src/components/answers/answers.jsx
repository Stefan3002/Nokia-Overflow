import './answers.css'
import Answer from "../answer/answer";
const Answers = ({data}) => {
    return (
        <div className='answers-container'>
            {
                data.map(answerData => {
                    return <Answer data={answerData} />
                })
            }
        </div>
    )
}
export default Answers