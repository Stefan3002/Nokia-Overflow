import './private-route.css'
import {useSelector} from "react-redux";
import {getUser, getUserLoading, getUserStatus} from "../../utils/store/user-store/user-selectors";
import {Navigate, useNavigate} from "react-router";

const PrivateRoute = ({children}) => {
    const user = useSelector(getUser)
    const status = useSelector(getUserStatus)

    // This is to prevent the split second when useSelector is still fetching the user, so the user variable would be null, the PrivateRoute would return the redirect and it's game over.
    if(status === 'loaded')
        if(user)
            return children
        else
            return <Navigate to='/auth' />



}
export default PrivateRoute