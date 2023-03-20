import './home-page.css'
import Parallax from "../../landing-page/parallax/parallax";
import Cards from "../../landing-page/cards/cards";
import Featured from "../../landing-page/featured/featured";
import FAQ from "../../landing-page/faq/faq";
import HeaderBanner from '../../../utils/imgs/landing-page/parallax/NokiaBanner.jpg'
import FooterBanner from '../../../utils/imgs/landing-page/footer/FooterBanner.jpg'
import parallaxHeaderData from '../../landing-page/parallax/parallaxHeader-data.json'
import parallaxFooterData from '../../landing-page/parallax/parallaxFooter-data.json'
import Footer from "../../landing-page/footer/footer";
import Targets from "../../landing-page/targets/targets";
import Navigation from "../../landing-page/navigation/navigation";

const HomePage = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <div className='home-page-container'>
                <Parallax img={HeaderBanner} parallaxData={parallaxHeaderData} showButton={false} />
                <div className="wrapper">
                    <Cards />
                </div>
                <Featured />
                <div className="wrapper">
                    <Targets />
                </div>
                <div className="wrapper">
                    <FAQ />
                </div>
                <Parallax img={FooterBanner} parallaxData={parallaxFooterData} showButton={true} buttonText="Let's go!" buttonBorderColor='white' buttonBorderSize='4' buttonBolded={true}  />
                <div className="wrapper">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default HomePage