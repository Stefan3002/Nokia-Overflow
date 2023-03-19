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
import Targets from "../../targets/targets";
import Navigation from "../../navigation/navigation";

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