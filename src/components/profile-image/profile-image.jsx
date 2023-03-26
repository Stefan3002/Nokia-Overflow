import './profile-image.css'
const ProfileImage = ({photoURL}) => {
    return (
        <img className='profile-image-container' referrerPolicy="no-referrer" src={photoURL} alt=""/>
    )
}
export default ProfileImage