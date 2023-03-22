const INITIAL_VALUE = {
    user: null
}

export const userReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'SET_USER':
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}