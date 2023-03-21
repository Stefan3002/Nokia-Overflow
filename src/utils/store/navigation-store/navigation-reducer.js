const INITIAL_VALUE = {
    navOpened: false
}

export const navigationReducer = (state = INITIAL_VALUE, action) => {
    const {payload, type} = action
    switch (type){
        case 'SET_NAV_OPENED':
            return {
                ...state,
                navOpened: payload
            }
        default:
            return state
    }
}
