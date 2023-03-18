import './question.css'
const Question = ({question, answer}) => {
    return (
        <div className='question-container'>
            <h3>{question}</h3>
            <p className="delimiter">════ ⋆★⋆ ════</p>
            <p>{answer}</p>
        </div>
    )
}
export default Question