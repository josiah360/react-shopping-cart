import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async(requestConfig, applyData) => {
        setIsLoading(true)

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                headers: requestConfig.headers ? requestConfig.headers : {},
            })
    
            if(!response.ok) {
                throw new Error('Something went wrong')
            }
    
            const data = await response.json()
    
            applyData(data)
        } catch(err) {
            setError(err.message)
        }

        setIsLoading(false)
    }, [])

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp