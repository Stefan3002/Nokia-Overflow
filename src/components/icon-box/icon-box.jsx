import './icon-box.css'
const IconBox = ({icon, text}) => {
    return (
        <div className='icon-box-container'>
            <img className='icon-box-img' src={icon} alt=""/>
            <p>{text}</p>
        </div>
    )
}
export default IconBox