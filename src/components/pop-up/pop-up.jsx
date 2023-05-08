import './pop-up.css'
import {useDispatch} from "react-redux";
import {setIsPoppedUp, setPopUpMessage} from "../../utils/store/utils-store/utils-actions";

const PopUp = ({text}) => {
    const dispatch = useDispatch()
    const closePopUp = () => {
        dispatch(setIsPoppedUp(false))
        dispatch(setPopUpMessage(undefined))
    }

    return (
        <div className='pop-up-container'>
            <p>{text}</p>
            <p onClick={closePopUp}>Close</p>
        </div>
    )
}
export default PopUp