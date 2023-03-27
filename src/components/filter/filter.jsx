import './filter.css'
import SelectInput from "../select-input/select-input";
const Filter = ({options, callback}) => {

    return (
        <div className='filter-container'>
            <SelectInput callback={callback} options={options} borderSize='2' borderColor='var(--accent-color)' />
        </div>
    )
}
export default Filter