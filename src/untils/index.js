import {useEffect,useState} from 'react'
// 自定义hook
export const useMount =(callback)=>{
    useEffect(()=>{
        callback&&callback()
    },[])
}

export const useUpdate = ()=>{
    const [,setState] = useState({})
    return ()=>setState({})
}