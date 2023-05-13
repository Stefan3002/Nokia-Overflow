import './trending.css'
import Question from "../question/question";
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setQuestionOpened} from "../../utils/store/utils-store/utils-actions";
import Filter from "../filter/filter";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {useParams} from "react-router";

const Trending = ({detailed, favourites}) => {
    const dispatch = useDispatch()
    const sendRequest = useHttpReq()
    const numberOfQuestionLoaded = 10
    const params = useParams()

    const [trendingQuestions, setTrendingQuestions] = useState([])
    const [categoriesOptions, setCategoriesOptions] = useState([])
    const [indeces, setIndeces] = useState([0, numberOfQuestionLoaded - 1, true])
    const notLoaded = useRef(true)
    const startIdx = useRef(0)
    const lastIdx = useRef(numberOfQuestionLoaded - 1)

    useEffect(() => {
        (async () => {
            let questions

            let category = undefined
            if (params.category)
                category = params.category
            if (!category)
                questions = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/${startIdx.current}/${lastIdx.current}`, 'GET', null, true)
            else
                questions = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/questions/${startIdx.current}/${lastIdx.current}/${category}`, 'GET', null, true)

            const newQuestions = [...trendingQuestions, ...questions.data]
            notLoaded.current = true
            setTrendingQuestions(newQuestions)
            setFilteredTrendingQuestions(newQuestions)
        })()
    }, [indeces])

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
        setFilteredTrendingQuestions(trendingQuestions.filter(question => {

            const labels = question.questionLabels.map(label => label.toLowerCase())

            let matchedLabel = false

            for (let label of labels)
                if (label.includes(targetString.toLowerCase())) {
                    matchedLabel = true
                    break
                }

            return question.questionTitle.toLowerCase().includes(targetString.toLowerCase()) ||
                matchedLabel
        }))
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 200 && notLoaded.current)
                loadMoreQuestions()
        })
    }, [indeces, notLoaded.current])

    const loadMoreQuestions = () => {
        notLoaded.current = false
        const newIndeces = [lastIdx.current + 1, lastIdx.current + numberOfQuestionLoaded, false]
        startIdx.current = newIndeces[0]
        lastIdx.current = newIndeces[1]
        setIndeces(newIndeces)
    }

    return (
        <div className='trending-container'>

            <div className="trending-header">
                <div className="trending-header-top">
                    <h2>Trending</h2>
                    <Button clickHandler={createNewQuestion} text='Create Nok' borderSize='2'
                            borderColor='var(--accent-color)' textColor='black'/>
                </div>
                <div className="trending-header-bottom">
                    <SearchInput callback={filterNoks} placeholder='Search noks' borderSize='2' borderColor='var(--accent-color)' />
                    <Filter callback={filterQuestionsByCategory} options={categoriesOptions} />
                </div>
            </div>
            <div className="trending-questions">
                {filteredTrendingQuestions && filteredTrendingQuestions.map((trendingQuestion, idx) => {
                    return <Question key={trendingQuestion.questionID} detailed={detailed}
                                     questionData={trendingQuestion} animationDelay={idx * 100}/>
                })}
            </div>

        </div>
    )
}
export default Trending