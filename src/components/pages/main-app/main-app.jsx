import './main-app.css'
import Trending from "../../trending/trending";
import Unanswered from "../../unanswered/unanswered";
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/MainAppBanner.jpg'
import ParallaxData from './parallaxData.json'
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserLoading} from "../../../utils/store/user-store/user-selectors";
import {useNavigate} from "react-router";
import Blur from "../../blur/blur";
import Loader from "../../loader/loader";

const MainApp = () => {
    const nav = useNavigate()
    const user = useSelector(getUser)
    const isLoading = useSelector(getUserLoading)

    if(user)
        return (
            <>
                {isLoading ? <div><Blur /> <Loader /></div> : null}
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