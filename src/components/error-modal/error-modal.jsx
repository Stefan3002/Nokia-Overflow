import './error-modal.css'
import Button from "../button/button";
import {useDispatch} from "react-redux";
import {setErrorMessage, setIsError} from "../../utils/store/utils-store/utils-actions";

const ErrorModal = ({errorMessage}) => {
    const dispatch = useDispatch()
    const closeError = () => {
        dispatch(setIsError(false))
        dispatch(setErrorMessage(undefined))
    }

    return (
        <div className='error-modal-container'>
            <div className="error-header">
                <h2>Error!</h2>
            </div>
            <p>{errorMessage}</p>
            <Button text='Got it!' borderColor='var(--accent-color)' borderSize='1' textColor='var(--accent-color)'
                    buttonBolded={false} clickHandler={closeError}/>
            <p>Sorry for the inconvenience</p>
        </div>
    )
}
export default ErrorModal