import './main-app.css'
import Trending from "../../trending/trending";
import Unanswered from "../../unanswered/unanswered";
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/MainAppBanner.jpg'
import ParallaxData from './parallaxData.json'
const MainApp = () => {
    return (
        <>
            <Parallax parallaxData={ParallaxData} img={ParallaxImg} height='40vh' />
            <div className='main-app-container'>
                <div className="main-app-left">
                    <Trending detailed={false} />
                </div>
                <div className="main-app-right">
                    {/*<Unanswered />*/}
                </div>
            </div>
        </>
    )
}
export default MainApp