const INITIAL_VALUE = {
    createQuestionOpened: false
}

export const utilsReducer = (state = INITIAL_VALUE, action) => {
    const {type, payload} = action
    switch (type){
        case 'SET_CREATE_QUESTION_OPENED':
            return {
                ...state,
                createQuestionOpened: payload
            }
        default:
            return state
    }
}