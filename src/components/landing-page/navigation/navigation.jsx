import './navigation.css'
import {Link} from "react-router-dom";
import logo from '../../../utils/imgs/LogoNokiaOverflow.svg'
const Navigation = () => {
    return (
        <ul className='navigation-container'>
            <li className='navigation-item'><img className='logo' src={logo} alt="Nokia Overflow"/></li>
            <div className='right-navigation-section'>
                <li className='navigation-item'><a href="src/components/landing-page/navigation#faq">FAQ</a></li>
               <li className='navigation-item'><a href="src/components/landing-page/navigation#high">Highlights</a></li>
                <Link to='/app'><li className='navigation-item'>Enter</li></Link>
            </div>
        </ul>
    )
}
export default Navigation