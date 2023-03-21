import './faq-question.css'
const FaqQuestion = ({question, answer}) => {
    return (
        <div className='faq-question-container'>
            <h3>{question}</h3>
            <p className="delimiter">════ ⋆★⋆ ════</p>
            <p>{answer}</p>
        </div>
    )
}
export default FaqQuestion