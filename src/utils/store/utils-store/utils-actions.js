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