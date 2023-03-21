import './profile.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/ProfileBanner.jpg'
import ParallaxData from './parallax-data-profile.json'
const Profile = () => {
    return (
        <div className='profile-container'>
            <Parallax img={ParallaxImg} parallaxData={ParallaxData} height='40vh' />
        </div>
    )
}
export default Profile