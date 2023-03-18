import './home-page.css'
import Parallax from "../../parallax/parallax";
import Cards from "../../cards/cards";
import Featured from "../../featured/featured";
import FAQ from "../../faq/faq";
import HeaderBanner from '../../../utils/imgs/parallax/NokiaBanner.jpg'
import FooterBanner from '../../../utils/imgs/footer/FooterBanner.jpg'
import parallaxHeaderData from '../../parallax/parallaxHeader-data.json'
import parallaxFooterData from '../../parallax/parallaxFooter-data.json'
import Footer from "../../footer/footer";

const HomePage = () => {
    return (
        <div className='home-page-container'>
            <Parallax img={HeaderBanner} parallaxData={parallaxHeaderData} />
            <div className="wrapper">
                <Cards />
            </div>
            <Featured />
            <div className="wrapper">
                <FAQ />
            </div>
            <Parallax img={FooterBanner} parallaxData={parallaxFooterData} />
            <div className="wrapper">
                <Footer />
            </div>
        </div>
    )
}
export default HomePage