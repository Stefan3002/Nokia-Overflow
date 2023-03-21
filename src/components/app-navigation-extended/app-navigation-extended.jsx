import './app-navigation-extended.css'
import {useSelector} from "react-redux";
import {getNavOpened} from "../../utils/store/navigation-store/navigation-selectors";
const AppNavigationExtended = () => {
    const opened = useSelector(getNavOpened)
    console.log(opened)
    if (opened)
        return (
            <div className='app-navigation-extended-container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam animi blanditiis consequatur deleniti dignissimos facere harum id laudantium, mollitia necessitatibus nesciunt nostrum officia quas, quo saepe voluptate voluptatum!</p>
            </div>
        )
    else
        return null
}
export default AppNavigationExtended