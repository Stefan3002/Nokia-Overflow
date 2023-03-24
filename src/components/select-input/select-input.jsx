import './select-input.css'
const SelectInput = ({options, borderSize, borderColor, callback}) => {
    return (
        <select style={{border: `${borderSize}px solid ${borderColor}`}} className='select-input-container' name="" id="">
            {
                options.map(option => {
                    return <option value="">{option}</option>
                })
            }
        </select>
    )
}
export default SelectInput