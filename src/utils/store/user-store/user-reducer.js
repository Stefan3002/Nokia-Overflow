const INITIAL_VALUE = {
    user: null,
    isLoading: false,
    err: null,
    status: 'idle'
}

export const userReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'SET_USER_DONE':
            return {
                ...state,
                user: payload,
                isLoading: false
            }
        case 'SET_USER_START':
            return {
                ...state,
                isLoading: true
            }
        case 'SET_USER_ERROR':
            return {
                ...state,
                isLoading: false,
                user: null,
                err: payload
            }
        case 'SET_USER_STATUS':
            return {
                ...state,
                status: payload
            }
        default:
            return state
    }
}