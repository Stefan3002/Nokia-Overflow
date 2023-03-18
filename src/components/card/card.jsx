import './card.css'
const Card = ({text, title, img, id}) => {
    return (
            <div className={`card card${id}`}>
                <img className='card-img' src={img} alt="" />
                <h2 className='card-title'>{title}</h2>
                <p className="delimiter">════ ⋆★⋆ ════</p>
                <p className="card-description">{text}</p>
            </div>
    )
}
export default Card