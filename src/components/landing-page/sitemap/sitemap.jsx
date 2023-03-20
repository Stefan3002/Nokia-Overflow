import './sitemap.css'
import {Link} from "react-router-dom";
const Sitemap = () => {
    return (
        <ul className='sitemap'>
            <li><a href="src/components/landing-page/sitemap#high">Highlights</a></li>
            <li><a href="src/components/landing-page/sitemap#faq">FAQ</a></li>
            <li><a href="src/components/landing-page/sitemap#about">About</a></li>
            <Link to='/app'><li>Enter app</li></Link>
        </ul>
    )
}
export default Sitemap