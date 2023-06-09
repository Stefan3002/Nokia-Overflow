import './change-user-info-modal.css'
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useHttpReq} from "../../utils/scripts/fetches/fetches";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../utils/store/user-store/user-selectors";
import categoriesStub from '../../utils/data-stubs/question-categories.json'
import {setChangeUserInfo} from "../../utils/store/user-store/user-actions";
import ChoiceCards from "../choice-cards/choice-cards";
import {useState} from "react";
import {minLengthValidator, requiredValidator} from "../../utils/scripts/validators/validators";

const ChangeUserInfoModal = () => {
    const userData = useSelector(getUser)
    const [interests, setInterests] = useState(userData.interests)
    const dispatch = useDispatch()
    const sendRequest = useHttpReq()
    const changeUserInfo = async (event) => {
        event.preventDefault()
        const newName = event.target[0].value
        const newUserData = {
            uid: userData.uid,
            photoURL: userData.photoURL,
            displayName: newName,
            interests: interests
        }
        await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users/${userData.uid}`, 'PATCH', JSON.stringify(newUserData), false, false, 'Info changed successfully!')
    }

    const closeChangeUserInfoModal = () => {
        dispatch(setChangeUserInfo(false))
    }

    return (
        <div className='change-user-info-modal-container'>
            <div className="change-user-info-header">
                <h2>Change profile info!</h2>
                <p onClick={closeChangeUserInfoModal}>Close</p>
            </div>
            <div className="change-user-info-modal-text">
                <form onSubmit={changeUserInfo} action="">
                    <SearchInput validators={[minLengthValidator, requiredValidator]} validatorOptions={{minLength: 5}}
                                 placeholder='New awesome name!' value={userData.displayName}
                                 borderColor='var(--accent-color)' borderSize={1}/>
                    <p>Your preferred category for news feed:</p>
                    <ChoiceCards setCards={setInterests} cards={categoriesStub.categoriesOptions}/>
                    {/*<SelectInput borderSize='1' borderColor='var(--accent-color)'*/}
                    {/*             options={categoriesStub.categoriesOptions}/>*/}
                    <Button text='Change!' borderColor='var(--accent-color)' borderSize='1'
                            textColor='var(--accent-color)'
                            buttonBolded={false}/>
                </form>
            </div>
        </div>
    )
}
export default ChangeUserInfoModal