import './pop-up.css'
import {useDispatch} from "react-redux";
import {setIsPoppedUp, setPopUpMessage} from "../../utils/store/utils-store/utils-actions";
import closeSVG from '../../utils/imgs/app/icons/CloseIcon.svg'

const PopUp = ({text}) => {
    const dispatch = useDispatch()
    const closePopUp = () => {
        dispatch(setIsPoppedUp(false))
        dispatch(setPopUpMessage(undefined))
    }

    return (
        <div className='pop-up-container'>
            <img className='new-question-icon' src={closeSVG} onClick={closePopUp} alt='Close'></img>
            <p>{text}</p>
        </div>
    )
}
export default PopUp