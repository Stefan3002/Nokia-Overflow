import './app-navigation-extended.css'
import {useDispatch, useSelector} from "react-redux";
import {getNavOpened} from "../../utils/store/navigation-store/navigation-selectors";
import {setNavOpened} from "../../utils/store/navigation-store/navigation-actions";
import HeartIcon from "../../utils/imgs/app/icons/HeartIcon.svg";
import TrendingIcon from "../../utils/imgs/app/icons/TrendingIcon.svg";
import LogoutIcon from "../../utils/imgs/app/icons/LogoutIcon.svg";
import ProfileIcon from "../../utils/imgs/app/icons/UserIcon.svg";
import {Link} from "react-router-dom";
import {logOut} from "../../utils/firebase/firebase";
import logo from "../../utils/imgs/LogoNokiaOverflow.svg";
const AppNavigationExtended = () => {
    const dispatch = useDispatch()
    const closeNav = () => {
        dispatch(setNavOpened(false))
    }

    return (
        <ul onMouseLeave={closeNav} className='app-navigation-extended-container'>
            <Link to='/app'><li><img className='logo' src={logo} alt="NK"/></li></Link>
            <ul className='app-navigation-bottom'>
                <Link to='profile'><li><img className='app-navigation-icon' src={ProfileIcon} alt='Profile'/><p className='nav-option-text'>Profile</p></li></Link>
                <Link to='favourites'><li><img className='app-navigation-icon' src={HeartIcon} alt='Pinned Noks'/><p className='nav-option-text'>Pinned Noks</p></li></Link>
                <Link to='trending'><li><img className='app-navigation-icon' src={TrendingIcon} alt='Trending Noks'/><p className='nav-option-text'>Trending Noks</p></li></Link>
                <li onClick={logOut}><img className='app-navigation-icon' src={LogoutIcon} alt='Log Out'/><p className='nav-option-text'>Log Out</p></li>
            </ul>
       </ul>
    )
}
export default AppNavigationExtended