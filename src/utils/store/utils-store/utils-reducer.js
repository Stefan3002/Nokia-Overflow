const INITIAL_VALUE = {
    createQuestionOpened: false,
    isLoading: false,
    categoryPreviewImg: undefined,
    isError: false,
    errorMessage: "Something bad happened!",
    isPoppedUp: false,
    popUpMessage: undefined,
    addAnswerOpened: false,
    openedQuestionId: undefined
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
        case 'SET_CATEGORY_PREVIEW_IMG':
            return {
                ...state,
                categoryPreviewImg: payload
            }
        case 'SET_IS_ERROR':
            return {
                ...state,
                isError: payload
            }
        case 'SET_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: payload
            }
        case 'SET_IS_POPPED_UP':
            return {
                ...state,
                isPoppedUp: payload
            }
        case 'SET_POP_UP_MESSAGE':
            return {
                ...state,
                popUpMessage: payload
            }
        case 'SET_ADD_ANSWER_OPENED':
            return {
                ...state,
                addAnswerOpened: payload
            }
        case 'SET_OPENED_QUESTION_ID':
            return {
                ...state,
                openedQuestionId: payload
            }
        default:
            return state
    }
}