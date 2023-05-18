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
import {connectWithGitHub, connectWithGoogle} from "../../../utils/firebase/firebase";
import {useDispatch} from "react-redux";
import {setUserFinished, setUserStart, setUserStatus} from "../../../utils/store/user-store/user-actions";
import googleIcon from '../../../utils/imgs/app/icons/GoogleIcon.svg'
import {useHttpReq} from "../../../utils/scripts/fetches/fetches";
import {setIsPoppedUp, setPopUpMessage} from "../../../utils/store/utils-store/utils-actions";

const Auth = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const sendRequest = useHttpReq()
    const createAccount = (event) => {
        event.preventDefault()
        nav('/app')
    }

    const writeUserToBackend = async (user) => {
        dispatch(setUserFinished(user.user))

        // Get the relevant info
        const createdUser = {
            uid: user.user.uid ? user.user.uid : 'Human',
            displayName: user.user.displayName,
            email: user.user.email,
            photoURL: user.user.photoURL,
            interests: []
        }
        console.log(createdUser)
        // Get the user to see if it already exists in the DB
        let alreadyCreated = false;
        let userData = undefined

        userData = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users/${user.user.uid}`, "GET", null, true, true)
        if (userData)
            alreadyCreated = true

        if (!alreadyCreated)
            // Send the user to the DB
            await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users`, 'POST', JSON.stringify(createdUser))

        // Get the data from the DB now.
        if (!alreadyCreated) {
            dispatch(setUserStart())
            dispatch(setUserStatus('loading'))
            userData = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users/${user.user.uid}`)
            dispatch(setUserFinished(userData))
            dispatch(setUserStatus('loaded'))
        }

        dispatch(setIsPoppedUp(true))
        dispatch(setPopUpMessage(`Howdy, ${userData.displayName}`))
        nav('/app')
    }
    const connectWithGoogleFront = async () => {
        const user = await connectWithGoogle()
        await writeUserToBackend(user)
    }
    const connectWithGitHubFront = async () => {
        const user = await connectWithGitHub()
        await writeUserToBackend(user)
    }

    return (
        <div className='auth-container'>
            <Parallax parallaxData={parallaxData} img={parallaxImg} height='40vh'/>
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
                    <p onClick={connectWithGoogleFront}><img className='auth-icon' src={googleIcon}
                                                             alt="Google Log In"/></p>
                    <p onClick={connectWithGitHubFront}><img className='auth-icon' src="" alt="GitHub Log In"/></p>
                    <form onSubmit={createAccount} action="">
                        <SearchInput placeholder='Username' borderSize='2' borderColor='var(--main-color)'/>
                        <SearchInput placeholder='Password' borderSize='2' borderColor='var(--main-color)'/>
                        <SearchInput placeholder='Confirm password' borderSize='2' borderColor='var(--main-color)'/>
                        <Button text='Sign up' borderSize='2' borderColor='var(--main-color)' textColor='black'/>
                    </form>
                    <p className='login-text'>Already a member? <a href="/auth/login">Log in</a></p>
                </div>
            </div>
        </div>
    )
}
export default Auth