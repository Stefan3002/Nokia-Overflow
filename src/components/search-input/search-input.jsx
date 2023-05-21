import './search-input.css'
import {useState} from "react";

const SearchInput = ({value, placeholder, borderSize, borderColor, callback}) => {

    const [inputValue, setInputValue] = useState(value)

    const inputChanged = (event) => {
        setInputValue(event.value)
        if (callback)
            callback()
    }

    return (
        <input value={inputValue} onChange={inputChanged} style={{border: `${borderSize}px solid ${borderColor}`}}
               className='search-input-container' type='text' placeholder={placeholder}>
        </input>
    )
}
export default SearchInput