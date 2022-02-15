import { useEffect, useState } from "react"
const useFetch = (url) => {

    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    
    useEffect( () => {
        // Cleaning up use effect => returning a function.
        const abortController = new AbortController();
        
        setTimeout( () =>{
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('404: Page not found!!')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(blogs)
                        setData(data);
                        setIsLoading(false);
                })
                .catch( err => {
                    if( err.name === 'AbortError'){
                        console.log('Abort Error', err.message);
                    } else{
                        setIsLoading(false);
                        setError(err.message);
                    }   
                })
        }, 2000)
        
        return () => abortController.abort();
    }, [url])

    return(
        {error, isLoading, data }
    )
}

export default useFetch;