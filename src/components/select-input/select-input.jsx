import './select-input.css'

const SelectInput = ({options, borderSize, borderColor, callback}) => {
    console.log('options are:', options)
    return (
        <select onChange={callback} style={{border: `${borderSize}px solid ${borderColor}`}} className='select-input-container' name="" id="">
            {
                options && options.map(option => {
                    return <option value="">{option}</option>
                })
            }
        </select>
    )
}
export default SelectInput