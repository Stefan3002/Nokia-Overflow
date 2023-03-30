import './profile.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxImg from '../../../utils/imgs/app/Headers/ProfileBanner.jpg'
import ParallaxData from './parallax-data-profile.json'
import {useSelector} from "react-redux";
import {getUser} from "../../../utils/store/user-store/user-selectors";
import ProfileImage from "../../profile-image/profile-image";
import MyQuestions from "../../profile/my-questions/my-questions";
import Button from "../../button/button";
import Badges from "../../profile/badges/badges";
const Profile = () => {
    const userData = useSelector(getUser)
    console.log(userData)
    if(userData) {
        const {displayName, photoURL, questions, badges} = userData
        return (
            <>
                <Parallax img={ParallaxImg} parallaxData={ParallaxData} height='40vh'/>
                <div className='profile-container'>
                    <div className="profile-left">
                        <ProfileImage photoURL={photoURL} />
                        <p className='profile-user-name'>{displayName}</p>
                    </div>
                    <div className="profile-my-badges">
                        <div className="profile-my-badges-header">
                            <h2 className='profile-section-header'>My Badges</h2>
                        </div>
                        <Badges bronzeBadgesNames={badges.bronze} />
                    </div>
                    <div className="profile-my-questions">
                        <div className="profile-my-questions-header">
                            <h2 className='profile-section-header'>My Noks</h2>
                            <Button borderColor='var(--accent-color)' borderSize='2' textColor='black' text='See all' />
                        </div>
                        <MyQuestions numberOfQuestions={3} questions={questions} />
                    </div>
                </div>
            </>

        )
    }
    else
        return null
}
export default Profile