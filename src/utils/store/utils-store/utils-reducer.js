const INITIAL_VALUE = {
    createQuestionOpened: false,
    isLoading: false
}

export const utilsReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'SET_CREATE_QUESTION_OPENED':
            return {
                ...state,
                createQuestionOpened: payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state
    }
}