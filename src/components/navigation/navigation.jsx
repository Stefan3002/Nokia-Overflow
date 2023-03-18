import './navigation.css'
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <ul className='navigation-container'>
            <li className='navigation-item'>NokiaOverflow</li>
            <div className='right-navigation-section'>
                <Link to='/about'><li className='navigation-item'>About</li></Link>
                <Link to='/high'><li className='navigation-item'>Highlights</li></Link>
            </div>
        </ul>
    )
}
export default Navigation