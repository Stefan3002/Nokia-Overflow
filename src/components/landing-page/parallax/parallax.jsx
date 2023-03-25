import './parallax.css'
import Button from "../../button/button";
import {Link} from "react-router-dom";

const Parallax = ({linkTo, img, parallaxData, showButton, buttonText, buttonBorderColor, buttonBorderSize, buttonBolded, height, backgroundPosition}) => {
    return (
        <header className='parallax' style={{backgroundImage: `radial-gradient(circle at ${parallaxData.gradientRadius}, rgba(0,0,0,0), rgba(0,0,0,${parallaxData.gradientIntensity})), url(${img})`, height: height, backgroundPosition: backgroundPosition}}>
            <h1 style={{color: parallaxData.color}} className='parallax-title'>{parallaxData.title}</h1>
            <h2 style={{color: parallaxData.color}}>{parallaxData.callToAction}</h2>
            {showButton ? <Link to={linkTo}><Button text={buttonText} borderColor={buttonBorderColor} borderSize={buttonBorderSize} buttonBolded={buttonBolded} /></Link> : null}
        </header>
    )
}
export default Parallax