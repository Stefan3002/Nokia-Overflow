import './footer.css'
import footerData from './footer-data.json'
import Sitemap from "../sitemap/sitemap";
const Footer = () => {
    return (
        <footer id="Footer" className='footer'>
            <div className="footer-content-right">
                <Sitemap />
            </div>
            <div className="footer-content-left">
                <p>2023 &copy; All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer