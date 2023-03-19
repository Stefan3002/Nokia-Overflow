import './navigation.css'
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <ul className='navigation-container'>
            <li className='navigation-item'>NokiaOverflow</li>
            <div className='right-navigation-section'>
                <li className='navigation-item'><a href="#faq">FAQ</a></li>
               <li className='navigation-item'><a href="#high">Highlights</a></li>
                <Link to='/app'><li className='navigation-item'>Enter</li></Link>
            </div>
        </ul>
    )
}
export default Navigation