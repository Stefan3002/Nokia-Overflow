import './footer.css'
import footerData from './footer-data.json'
const Footer = () => {
    return (
        <footer id="Footer" className='footer'>
            <div className="footer-content-left">
                <p>2023 &copy; All rights reserved.</p>
                <p className="delimiter">════ ⋆★⋆ ════</p>
            </div>
            <div className="footer-content-right">
                <p>Quick Links:</p>
                <ul>
                    <li>Highlights</li>
                    <li>About</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer