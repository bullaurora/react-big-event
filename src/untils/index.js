import {useEffect,useState,useRef} from 'react'
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

 export const useUpdateEffect = (callback,deps) => {
    const flag = useRef(true)
    useEffect(() => {
        if (flag.current) {
            flag.current = false      //当deps第一次变化时，不执行effect函数，而将flag.current置为false
        } else {
            return callback()          //当deps第二次变化时，执行effect函数
        }
    }, deps)
}
