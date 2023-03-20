import './app-navigation.css'
import {Outlet} from "react-router";
import HeartIcon from '../../utils/imgs/app/icons/HeartIcon.svg'
import LogoutIcon from '../../utils/imgs/app/icons/LogoutIcon.svg'
import TrendingIcon from '../../utils/imgs/app/icons/TrendingIcon.svg'
const AppNavigation = () => {
    return (
        <>
            <ul className='app-navigation-container'>
                <li>NK</li>
                <ul className='app-navigation-bottom'>
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