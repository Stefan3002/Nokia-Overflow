import './button.css'
import {Link} from "react-router-dom";
const Button = ({type, clickHandler, text, borderSize, borderColor, buttonBolded, textColor}) => {
    console.log(borderSize, borderColor)
    return (
        <button type={type} onClick={clickHandler} style={{border: `${borderSize}px solid ${borderColor}`, fontWeight: buttonBolded ? 'bold' : 'normal', color: textColor}} className='button-container'>
            {text}
        </button>
    )
}

export default Button