import './target.css'
const Target = ({targetData, img}) => {
    return (
        <div id={targetData.id} className='target-container'>
            <img className='target-icon' src={img} alt={targetData.name}/>
            <h3>{targetData.name}</h3>
            <p className="delimiter">════ ⋆★⋆ ════</p>
            <p>Nokia Overflow the place to find info about <span className="high-text">{targetData.description}</span> and so much more.</p>
        </div>
    )
}
export default Target