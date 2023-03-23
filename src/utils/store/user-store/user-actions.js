
export const setUserStart = () => {
    return {
        type: 'SET_USER_START',
        payload: null
    }
}

export const setUserError = (err) => {
    return {
        type: 'SET_USER_ERROR',
        payload: err
    }
}

export const setUserFinished = (user) => {
    return {
        type: 'SET_USER_DONE',
        payload: user
    }
}
