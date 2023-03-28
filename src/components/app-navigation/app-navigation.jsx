import './app-navigation.css'
import {Outlet} from "react-router";
import HeartIcon from '../../utils/imgs/app/icons/HeartIcon.svg'
import LogoutIcon from '../../utils/imgs/app/icons/LogoutIcon.svg'
import TrendingIcon from '../../utils/imgs/app/icons/TrendingIcon.svg'
import ProfileIcon from '../../utils/imgs/app/icons/UserIcon.svg'
import {useDispatch, useSelector} from "react-redux";
import {setNavOpened} from "../../utils/store/navigation-store/navigation-actions";
import {getNavOpened} from "../../utils/store/navigation-store/navigation-selectors";
import AppNavigationExtended from "../app-navigation-extended/app-navigation-extended";
import logo from '../../utils/imgs/LogoNokiaOverflow.svg'
import {getLoading} from "../../utils/store/utils-store/utils-selectors";
import Blur from "../blur/blur";
import Loader from "../loader/loader";
import {getUserLoading} from "../../utils/store/user-store/user-selectors";
const AppNavigation = () => {
    const navOpened = useSelector(getNavOpened)
    const dispatch = useDispatch()
    const openNav = () => {
        dispatch(setNavOpened(true))
    }
    const isLoading = useSelector(getUserLoading)
    const isLoading2 = useSelector(getLoading)

    return (
        <>
            {isLoading2 || isLoading ? <div><Blur /> <Loader /> </div> : null}
            {navOpened ? <AppNavigationExtended /> : null}
            <ul onMouseEnter={openNav} className='app-navigation-container'>
                <li><img className='logo' src={logo} alt="NK"/></li>
                <ul className='app-navigation-bottom'>
                    <li><img className='app-navigation-icon' src={ProfileIcon} alt='Profile'/></li>
                    <li><img className='app-navigation-icon' src={HeartIcon} alt='Pinned Noks'/></li>
                    <li><img className='app-navigation-icon' src={TrendingIcon} alt='Trending Noks'/></li>
                    <li><img className='app-navigation-icon' src={LogoutIcon} alt='Log Out'/></li>
                </ul>
            </ul>
            <Outlet />
        </>

    )
}
export default AppNavigation