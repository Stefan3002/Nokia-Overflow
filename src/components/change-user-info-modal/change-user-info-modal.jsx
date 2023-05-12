import './change-user-info-modal.css'
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";

const ChangeUserInfoModal = () => {
    const sendRequest = useHttpReq()
    const userData = useSelector(getUser)
    const changeUserInfo = async (event) => {
        event.preventDefault()
        const newName = event.target[0].value
        console.log(userData)
        const newUserData = {
            uid: userData.uid,
            photoURL: userData.photoURL,
            displayName: newName
        }
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users/${userData.uid}`, 'PATCH', JSON.stringify(newUserData), false, false, 'Info changed successfully!')
    }

    return (
        <div className='change-user-info-modal-container'>
            <div className="change-user-info-header">
                <h2>Change profile info!</h2>
            </div>
            <div className="change-user-info-modal-text">
                <form onSubmit={changeUserInfo} action="">
                    <SearchInput placeholder='New awesome name!' borderColor='var(--accent-color)' borderSize={1}/>
                    <Button text='Change!' borderColor='var(--accent-color)' borderSize='1'
                            textColor='var(--accent-color)'
                            buttonBolded={false}/>
                </form>
            </div>
        </div>
    )
}
export default ChangeUserInfoModal