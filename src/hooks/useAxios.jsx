import { useEffect, useRef, useState } from "react"
   
export function useAxios( axiosInstance, method, url ) {

    const [ data, setData ] = useState({})
    const [ results, setResults ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(false)
    const responseData = useRef(false)

    useEffect( () => {
        const controller = new AbortController()
        const fechData = async () => {
            try {
                const res = await axiosInstance
                    [method](url, {
                        signal: controller.signal
                    })
                setData(res.data)
                setResults(res.data.results)
            } catch(err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        
        if(responseData) fechData()
        return ( () => {
            controller.abort()
            responseData.current = true
        } )
        
    }, [url])

    return { data, results, isLoading, error }
}

    