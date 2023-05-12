export const setQuestionOpened = (bool) => {
    return {
        type: 'SET_CREATE_QUESTION_OPENED',
        payload: bool
    }
}

export const setLoading = (bool) => {
    return {
        type: 'SET_LOADING',
        payload: bool
    }
}

export const setCategoryPreviewImg = (img) => {
    return {
        type: 'SET_CATEGORY_PREVIEW_IMG',
        payload: img
    }
}
export const setIsError = (bool) => {
    return {
        type: 'SET_IS_ERROR',
        payload: bool
    }
}

export const setErrorMessage = (msg) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        payload: msg
    }
}

export const setIsPoppedUp = (bool) => {
    return {
        type: 'SET_IS_POPPED_UP',
        payload: bool
    }
}
export const setPopUpMessage = (msg) => {
    return {
        type: 'SET_POP_UP_MESSAGE',
        payload: msg
    }
}

export const setAddAnswerOpened = (bool) => {
    return {
        type: 'SET_ADD_ANSWER_OPENED',
        payload: bool
    }
}

export const setOpenedQuestionId = (id) => {
    return {
        type: 'SET_OPENED_QUESTION_ID',
        payload: id
    }
}