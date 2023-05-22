import './search-input.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setInputsValid} from "../../utils/store/utils-store/utils-actions";

const SearchInput = ({
                         validators,
                         validatorOptions,
                         value,
                         placeholder,
                         borderSize,
                         borderColor,
                         callback,
                         textArea
                     }) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(value || '')
    const [valid, setValid] = useState(true)
    const inputChanged = (event) => {
        let isValid = true
        for (let validator of validators) {
            if (!validator(event.target.value, validatorOptions)) {
                isValid = false
                break
            }
        }
        dispatch(setInputsValid(isValid))
        setValid(isValid)
        setInputValue(event.target.value)
        if (callback)
            callback(event)
    }

    if (!textArea)
        return (
            <>
                <input value={inputValue} onChange={inputChanged} style={{
                    border: `${borderSize}px solid ${borderColor}`,
                    backgroundColor: !valid && 'var(--err-color)'
                }}
                       className='search-input-container' type='text' placeholder={placeholder}>
                </input>
                {!valid && <p className='error-message'>Please enter a valid input!</p>}
            </>
        )
    else
        return (
            <>
                <textarea rows={13} cols={43} value={inputValue} onChange={inputChanged} style={{
                    border: `${borderSize}px solid ${borderColor}`,
                    backgroundColor: !valid && 'var(--err-color)'
                }}
                          className='search-input-container' placeholder={placeholder}>
                </textarea>
                {!valid && <p className='error-message'>Please enter a valid input!</p>}
            </>

        )
}
export default SearchInput