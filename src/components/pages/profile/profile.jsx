import './profile.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/ProfileBanner.jpg'
import ParallaxData from './parallax-data-profile.json'
import {useSelector} from "react-redux";
import {getUser} from "../../../utils/store/user-store/user-selectors";
import ProfileImage from "../../profile-image/profile-image";
const Profile = () => {
    const userData = useSelector(getUser)
    console.log(userData)
    if(userData) {
        const {displayName, photoURL} = userData
        return (
            <div className='profile-container'>
                <Parallax img={ParallaxImg} parallaxData={ParallaxData} height='40vh'/>
                <div className="profile-left">
                    <ProfileImage photoURL={photoURL} />
                    <p className='profile-user-name'>{displayName}</p>
                </div>
            </div>
        )
    }
    else
        return null
}
export default Profile