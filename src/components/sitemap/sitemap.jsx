import './sitemap.css'
import {Link} from "react-router-dom";
const Sitemap = () => {
    return (
        <ul className='sitemap'>
            <li><a href="#high">Highlights</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#about">About</a></li>
            <Link to='/app'><li>Enter app</li></Link>
        </ul>
    )
}
export default Sitemap