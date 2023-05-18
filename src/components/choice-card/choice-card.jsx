import './choice-card.css'
import checkSVG from '../../utils/imgs/app/icons/CheckIcon.svg'
import CategoryIcon from "../category-icon/category-icon";

const ChoiceCard = ({onClick, data, chosen}) => {


    return (
        <div onClick={() => onClick(data)} className={`choice-card ${chosen && 'chosen'}`}>
            <CategoryIcon cat={data}/>
            <p>{data}</p>
            {chosen && <img className='check-icon' src={checkSVG} alt="Cheked"/>}
        </div>
    )
}
export default ChoiceCard