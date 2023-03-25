import './new-question.css'
import {useDispatch} from "react-redux";
import {setQuestionOpened} from "../../utils/store/utils-store/utils-actions";
import closeIcon from '../../utils/imgs/app/icons/CloseIcon.svg'
import SearchInput from "../search-input/search-input";
import Button from "../button/button";
import SelectInput from "../select-input/select-input";
import categoriesOptionsStub from '../../utils/data-stubs/question-categories.json'
const NewQuestion = () => {
    const dispatch = useDispatch()
    const closeCreateQuestion = () => {
        dispatch(setQuestionOpened(false))
    }

    const categoriesOptions = categoriesOptionsStub.categoriesOptions

    const createQuestion = (event) => {
        event.preventDefault()
        const title = event.target[0].value
        const description = event.target[1].value
        const selectedIndex = event.target[2].selectedIndex
        const category = event.target[2][selectedIndex].innerText
        const date = Date.now()
    //     SEND TO DB
    //     TODO
    }

    return (
        <div className='new-question-container'>
            <div className="new-question-header">
                <img className='new-question-icon' onClick={closeCreateQuestion} src={closeIcon} alt="Close"/>
            </div>
            <h2>New Nok</h2>
            <form onSubmit={createQuestion} className="new-question-forms" action=''>
                <SearchInput placeholder='Title of the Nok' borderColor='black' borderSize='1' />
                <SearchInput placeholder='Description of the Nok' borderColor='black' borderSize='1' />
                <SelectInput options={categoriesOptions} borderSize='1' borderColor='black' />
                <Button type='submit' text='Create Nok' borderSize='1' borderColor='black' textColor='black' />
            </form>
        </div>
    )
}
export default NewQuestion