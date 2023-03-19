import './button.css'
import {Link} from "react-router-dom";
const Button = ({text, borderSize, borderColor, buttonBolded}) => {
    console.log(borderSize, borderColor)
    return (
        <Link to='/app'>
            <button style={{border: `${borderSize}px solid ${borderColor}`, fontWeight: buttonBolded ? 'bold' : 'normal'}} className='button-container'>
                {text}
            </button>
        </Link>
    )
}

export default Button