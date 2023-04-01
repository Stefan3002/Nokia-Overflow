import './label.css'
const Label = ({labelData}) => {
    return (
        <div className='label-container'>
            <p>{labelData}</p>
        </div>
    )
}
export default Label