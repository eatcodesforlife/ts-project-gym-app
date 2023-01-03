import {useState, useEffect} from 'react'


function useMediaQuery(query: string) {
  
    const [ isMatch, setIsMatch ] = useState(false)
    
    useEffect( () => {
        const media = window.matchMedia(query)
        if(media.matches !== isMatch ){
            setIsMatch(media.matches)
        }
        const listener = () => setIsMatch(media.matches)
        window.addEventListener('resize', listener) 
        return () => window.removeEventListener('resize', listener)
    }, [query, isMatch])
    return isMatch
}

export default useMediaQuery