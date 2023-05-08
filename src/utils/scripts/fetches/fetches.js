import {useDispatch} from "react-redux";
import {setErrorMessage, setIsError, setLoading} from "../../store/utils-store/utils-actions";
import {useCallback} from "react";

export const useHttpReq = () => {
    const dispatch = useDispatch()
    const sendRequest = useCallback(
        async (URL, method = 'GET', body = null, silentFail = false) => {
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

                dispatch(setLoading(false))
                if (!res.ok)
                    throw new Error(response.error)
                else {
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
