import {useDispatch} from "react-redux";
import {
    setErrorMessage,
    setIsError,
    setIsPoppedUp,
    setLoading,
    setPopUpMessage
} from "../../store/utils-store/utils-actions";
import {useCallback} from "react";

export const useHttpReq = () => {
    const dispatch = useDispatch()
    const sendRequest = useCallback(
        async (URL, method = 'GET', body = null, silentFail = false, silentSuccess = true, confirmationMessage = 'Success!', silentLoading = false) => {
            if (!silentLoading)
                dispatch(setLoading(true))
            try {
                const res = await fetch(URL, {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body
                })

                const response = await res.json()
                if (!silentLoading)
                    dispatch(setLoading(false))
                if (!res.ok)
                    throw new Error(response.error)
                else {
                    if (!silentSuccess) {
                        dispatch(setIsPoppedUp(true))
                        dispatch(setPopUpMessage(confirmationMessage))
                        window.location.reload(true)
                    }
                    return response
                }
            } catch (err) {
                if (!silentFail) {
                    dispatch(setIsError(true))
                    dispatch(setErrorMessage(err.message))
                }
            }
        }, [])
    return sendRequest

}
