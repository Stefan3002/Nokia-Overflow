import './questions-page.css'
import ParallaxImg from "../../../utils/imgs/app/Headers/Questions-Parallax.jpg";
import ParallaxData from "./questions-page-parallax-data.json";
import Parallax from "../../landing-page/parallax/parallax";

const QuestionsPage = ({headerTitle, component}) => {
    return (
        <>
            <Parallax img={ParallaxImg} headerTitle={headerTitle} parallaxData={ParallaxData} height='40vh'/>
            <div className='questions-page'>
                {component}
            </div>
        </>

    )
}
export default QuestionsPage