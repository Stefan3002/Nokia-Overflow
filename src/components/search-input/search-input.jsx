import './search-input.css'
const SearchInput = ({placeholder, borderSize, borderColor, callback}) => {
    return (
        <input onChange={callback} style={{border: `${borderSize}px solid ${borderColor}`}} className='search-input-container' type='text' placeholder={placeholder}>
        </input>
    )
}
export default SearchInput