export const requiredValidator = (value, options) => {
    if (!value)
        return false
    return true
}

export const minLengthValidator = (value, options) => {
    const {minLength} = options
    if (value.length < minLength)
        return false
    return true
}