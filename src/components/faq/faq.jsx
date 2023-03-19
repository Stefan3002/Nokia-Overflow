import './faq.css'
import {useState} from "react";
import FAQData from './faq-data.json'
import Question from "../question/question";
import RightCarret from '../../utils/imgs/smalls/RightCarret.svg'
import LeftCarret from '../../utils/imgs/smalls/LeftCarret.svg'
const FAQ = () => {

    const [questionIdx, setQuestionIdx] = useState(0)
    const nextQuestion = () => {
        if(questionIdx === FAQData.questions.length - 1)
            setQuestionIdx(0)
        else
            setQuestionIdx(questionIdx + 1)
    }
    const previousQuestion = () => {
        if(questionIdx === 0)
            setQuestionIdx(FAQData.questions.length - 1)
        else
            setQuestionIdx(questionIdx - 1)
    }

    return (
        <div id='faq' className='faq-container'>
            <Question question={FAQData.questions[questionIdx].question} answer={FAQData.questions[questionIdx].answer} />
            <img className='carret' onClick={previousQuestion} src={LeftCarret} alt="Previous" />
            <img className='carret' onClick={nextQuestion} src={RightCarret} alt="Next" />

        </div>
    )
}
export default FAQ