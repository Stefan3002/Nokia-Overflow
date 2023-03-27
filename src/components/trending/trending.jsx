import './trending.css'
import Question from "../question/question";
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setQuestionOpened} from "../../utils/store/utils-store/utils-actions";
import Filter from "../filter/filter";
import categoriesDataStub from '../../utils/data-stubs/question-categories.json'
import questionsStub from '../../utils/data-stubs/questions-stub.json'
import questionOpened from "../pages/question-opened/question-opened";
const Trending = ({detailed}) => {
    const dispatch = useDispatch()
    const trendingQuestions = questionsStub.questions


    const categoriesOptions = categoriesDataStub.categoriesOptions

    const createNewQuestion = () => {
        dispatch(setQuestionOpened(true))
    }

    const [filteredTrendingQuestions, setFilteredTrendingQuestions] = useState(trendingQuestions)

    const filterQuestionsByCategory = (event) => {
        const selectedIndex = event.target.selectedIndex
        const selectedCategory = event.target[selectedIndex].innerText
        if(selectedCategory === 'All')
            setFilteredTrendingQuestions(trendingQuestions)
        else
            setFilteredTrendingQuestions(trendingQuestions.filter(question => question.category === selectedCategory))
    }

    const filterNoks = (event) => {
        const targetString = event.target.value
        setFilteredTrendingQuestions(trendingQuestions.filter(question => question.questionTitle.toLowerCase().includes(targetString.toLowerCase())))
    }
    return (
        <div className='trending-container'>
            <div className="trending-header">
                <div className="trending-header-top">
                    <h2>Trending</h2>
                    <Button clickHandler={createNewQuestion} text='Create Nok' borderSize='2' borderColor='var(--accent-color)' textColor='black' />
                </div>
                <div className="trending-header-bottom">
                    <SearchInput callback={filterNoks} placeholder='Search noks' borderSize='2' borderColor='var(--accent-color)' />
                    <Filter callback={filterQuestionsByCategory} options={categoriesOptions} />
                </div>
            </div>
            <div className="trending-questions">
                {filteredTrendingQuestions.map((trendingQuestion, idx) => {
                    return <Question detailed={detailed} questionData={trendingQuestion} animationDelay={idx * 100} />
                })}
            </div>

        </div>
    )
}
export default Trending