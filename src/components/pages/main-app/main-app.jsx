import './main-app.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/MainAppBanner.jpg'
import ParallaxData from './parallaxData.json'
import {useSelector} from "react-redux";
import Blur from "../../blur/blur";
import {getCreateQuestionOpened} from "../../../utils/store/utils-store/utils-selectors";
import NewQuestion from "../../new-question/new-question";
import CategoriesPreview from "../../categories-preview/categories-preview";
import Trending from "../../trending/trending";

const MainApp = () => {

    const createQuestionOpened = useSelector(getCreateQuestionOpened)
    return (
        <>
            {createQuestionOpened ? <div><Blur /> <NewQuestion /> </div> : null}
            <Parallax linkTo='categories' showButton={true} buttonText='Categories' buttonBorderColor='white'
                      buttonBorderSize='2' parallaxData={ParallaxData} img={ParallaxImg} height='40vh'/>
            <div className='main-app-container'>
                <div className="categories-preview-main">
                    <CategoriesPreview/>
                    <Trending feed={true} detailed={true} title='Your feed' s/>
                </div>
                <div className="main-app-right">
                    {/*<Unanswered />*/}
                </div>
            </div>
        </>
    )

}
export default MainApp