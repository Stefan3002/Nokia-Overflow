import './private-route.css'
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import {useNavigate} from "react-router";
const PrivateRoute = ({children}) => {
    const user = useSelector(getUser)
    const nav = useNavigate()
    if (user)
        return children
    else
        nav('/auth')
}
export default PrivateRoute