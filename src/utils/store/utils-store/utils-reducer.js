const INITIAL_VALUE = {
    createQuestionOpened: false,
    isLoading: false,
    categoryPreviewImg: undefined
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
        default:
            return state
    }
}