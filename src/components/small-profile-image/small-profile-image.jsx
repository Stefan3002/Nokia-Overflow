import './small-profile-image.css'
const SmallProfileImage = ({photoURL}) => {
    return (
        <img className='small-profile-image-container' referrerPolicy="no-referrer" src={photoURL} alt=""/>
    )
}
export default SmallProfileImage