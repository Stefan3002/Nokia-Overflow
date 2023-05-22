import './button.css'
import {useSelector} from "react-redux";
import {getInputsValid} from "../../utils/store/utils-store/utils-selectors";

const Button = ({
                    canBeDisabled,
                    marginTop,
                    type,
                    clickHandler,
                    text,
                    borderSize,
                    borderColor,
                    buttonBolded,
                    textColor
                }) => {
    const inputsValid = useSelector(getInputsValid)
    return (
        <button disabled={canBeDisabled && !inputsValid} type={type} onClick={clickHandler} style={{
            marginTop: `${marginTop}`,
            border: `${borderSize}px solid ${borderColor}`,
            fontWeight: buttonBolded ? 'bold' : 'normal',
            color: textColor
        }} className='button-container'>
            {text}
        </button>
    )
}

export default Button