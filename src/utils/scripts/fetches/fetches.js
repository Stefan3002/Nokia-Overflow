import {useDispatch} from "react-redux";
import {setLoading} from "../../store/utils-store/utils-actions";
import {useCallback} from "react";

export const useHttpReq = async (uid) => {
    const dispatch = useDispatch()
    const sendRequest = useCallback(
        async (URL, method = 'GET', body = null) => {
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
                if (!response.ok)
                    throw new Error(response.error)
                else
                    return response
            } catch (err) {
                console.log(err.error)
                //     Dispatch error

            }
        }, [])
    return {
        sendRequest
    }
}
