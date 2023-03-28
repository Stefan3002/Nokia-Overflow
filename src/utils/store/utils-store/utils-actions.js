export const setQuestionOpened = (bool) => {
    return {
        type: 'SET_CREATE_QUESTION_OPENED',
        payload: bool
    }
}

export const setLoading= (bool) => {
    return {
        type: 'SET_LOADING',
        payload: bool
    }
}