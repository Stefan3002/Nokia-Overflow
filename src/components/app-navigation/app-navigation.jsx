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
const AppNavigation = () => {
    const navOpened = useSelector(getNavOpened)
    const dispatch = useDispatch()
    const openNav = () => {
        dispatch(setNavOpened(true))
    }

    return (
        <>
            {navOpened ? <AppNavigationExtended /> : null}
            <ul onMouseEnter={openNav} className='app-navigation-container'>
                <li>NK</li>
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