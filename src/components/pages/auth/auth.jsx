import './auth.css'
import SearchInput from "../../search-input/search-input";
import Parallax from "../../landing-page/parallax/parallax";
import parallaxData from './parallax-data-auth.json'
import parallaxImg from '../../../utils/imgs/app/Headers/AuthBanner.jpg'
import Button from "../../button/button";
import {useNavigate} from "react-router";
import IconBox from "../../icon-box/icon-box";
import fastIcon from '../../../utils/imgs/app/icons/FastIcon.svg'
import badgeIcon from '../../../utils/imgs/app/icons/BadgeIcon.svg'
import checkIcon from '../../../utils/imgs/app/icons/CheckIcon.svg'
import Divider from "../../divider/divider";
import {connectWithGoogle} from "../../../utils/firebase/firebase";
import {useDispatch} from "react-redux";
import {setUserFinished} from "../../../utils/store/user-store/user-actions";
const Auth = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const createAccount = (event) => {
        event.preventDefault()
        nav('/app')
    }
    const connectWithGoogleFront = async () => {
        const user = await connectWithGoogle()
        dispatch(setUserFinished(user.user))
    //     Send user to DB
    //     TODO
        nav('/app')
    }

    return (
        <div className='auth-container'>
            <Parallax parallaxData={parallaxData} img={parallaxImg} height='40vh' />
            <div className="auth-content wrapper">
                <div className="auth-left">
                    <div className="auth-text">
                        <p>Join us now and get the answers you deserve to your most pressing questions.</p>
                    </div>
                    <div className="auth-bottom">
                        <IconBox text='Get answers FAST!' icon={fastIcon} />
                        <Divider />
                        <IconBox text='Get BADGES for your contribution!' icon={badgeIcon} />
                        <Divider />
                        <IconBox text='Get RELIABLE answers!' icon={checkIcon} />
                    </div>
                </div>
                <div className="auth-right">
                    <h2>Sign-up</h2>
                    <p onClick={connectWithGoogleFront}>Google</p>
                    <form onSubmit={createAccount} action="">
                        <SearchInput placeholder='Username' borderSize='2' borderColor='var(--main-color)' />
                        <SearchInput placeholder='Password' borderSize='2' borderColor='var(--main-color)' />
                        <SearchInput placeholder='Confirm password' borderSize='2' borderColor='var(--main-color)' />
                        <Button text='Sign up' borderSize='2' borderColor='var(--main-color)' textColor='black' />
                    </form>
                    <p className='login-text'>Already a member? <a href="/auth/login">Log in</a></p>
                </div>
            </div>
        </div>
    )
}
export default Auth