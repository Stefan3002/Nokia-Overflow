import './trending.css'
import Question from "../question/question";
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setQuestionOpened} from "../../utils/store/utils-store/utils-actions";
import Filter from "../filter/filter";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {getCreateQuestionOpened} from "../../utils/store/utils-store/utils-selectors";
import NewQuestion from "../new-question/new-question";

const Trending = ({detailed}) => {
    const dispatch = useDispatch()
    const sendRequest = useHttpReq()

    const createQuestion = useSelector(getCreateQuestionOpened)

    const [trendingQuestions, setTrendingQuestions] = useState([])
    const [categoriesOptions, setCategoriesOptions] = useState([])

    useEffect(() => {
        (async () => {
            const questions = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/0/10`)
            setTrendingQuestions(questions.data)
            setFilteredTrendingQuestions(questions.data)
            console.log('Questions', trendingQuestions)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const categories = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/categories`)
            setCategoriesOptions(categories.data)
        })()
    }, [])

    const createNewQuestion = () => {
        dispatch(setQuestionOpened(true))
    }

    const [filteredTrendingQuestions, setFilteredTrendingQuestions] = useState(trendingQuestions)
    console.log('filtered ones', filteredTrendingQuestions)
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
            {createQuestion && <NewQuestion/>}
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
                {filteredTrendingQuestions && filteredTrendingQuestions.map((trendingQuestion, idx) => {
                    return <Question detailed={detailed} questionData={trendingQuestion} animationDelay={idx * 100}/>
                })}
            </div>

        </div>
    )
}
export default Trending