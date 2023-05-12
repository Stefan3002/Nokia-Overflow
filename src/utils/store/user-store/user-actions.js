
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

export const setUserStatus = (status) => {
    return {
        type: 'SET_USER_STATUS',
        payload: status
    }
}

export const setChangeUserInfo = (bool) => {
    return {
        type: 'SET_CHANGE_USER_INFO_OPENED',
        payload: bool
    }
}
