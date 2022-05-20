import {useEffect} from 'react'
// 自定义hook
export const useMount =(callback)=>{
    useEffect(()=>{
        callback&&callback()
    },[])
}