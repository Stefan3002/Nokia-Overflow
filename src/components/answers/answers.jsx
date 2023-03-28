import './answers.css'
import Answer from "../answer/answer";
import Divider from "../divider/divider";
const Answers = ({data}) => {
    return (
        <div className='answers-container'>
            {
                data.map(answerData => {
                    return <div>
                        <Answer data={answerData} />
                        <Divider />
                    </div>
                })
            }
        </div>
    )
}
export default Answers