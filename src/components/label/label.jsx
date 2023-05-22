import './label.css'

const Label = ({labelData, light}) => {
    return (
        <div className='label-container'
             style={light && {background: 'var(--main-color)', color: 'var(--accent-color)'}}>
            <p>{labelData}</p>
        </div>
    )
}
export default Label