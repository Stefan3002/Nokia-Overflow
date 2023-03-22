import './main-app.css'
import Trending from "../../trending/trending";
import Unanswered from "../../unanswered/unanswered";
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/MainAppBanner.jpg'
import ParallaxData from './parallaxData.json'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../../utils/store/user-store/user-selectors";
import {useNavigate} from "react-router";
import {useEffect} from "react";
import {setUser} from "../../../utils/store/user-store/user-actions";
const MainApp = () => {
    const nav = useNavigate()
    const user = useSelector(getUser)


    if(user)
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
    else
        nav('/auth')

}
export default MainApp