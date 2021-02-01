import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const abortCont = new AbortController(); //chreation of const that will be used as a signal to stop the fetch 

        // setTimeout(()=>{
        fetch(url, {signal: abortCont.signal }) //request to the server  // second argument is a assotiation of fetch and its abort controller

            .then((res)=>{   // geting results from the server in JSON file
                if(!res.ok){
                    throw Error('could not fetch data from this resource')
                }
                return res.json();  // getting data from JSON file . it is another promisse that needs to be followed by .then
            })
            .then((blogs)=>{     // data that we got in previous step going to get used to setBlogs and build HTML template
                setData(blogs);
                setIsPending(false); 
                setError(null);
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                setError(err.message);
                }
                
            })

        // }, 1000)

        return ()=> abortCont.abort();  // sending a signal that associated fetch request should be stopped (aborted)

    }, [url])

    return {data, isPending, error};
}
 
export default useFetch;