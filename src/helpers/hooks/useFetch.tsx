import { axios } from "../../axios-config"

const { useEffect, useState } = require("react")

const useFetch = (url:string, params:object) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [exception, setException] = useState(null)

    const fetch = async (p: typeof params) => {
        setLoading(true)
        await axios.get(url, {
            params: p
        })
        .then(r => {
            if(r) {
                setLoading(false)
                setData(r)
            }
        })
        .catch(e => {
            setLoading(false)
            setException(e)
        })
    }

    useEffect(() => {
        fetch(params)
    }, [url])

    return [ data, loading, exception, fetch ]
    
}

export default useFetch