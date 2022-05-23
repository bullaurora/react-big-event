import React,{ useState,useEffect} from "react";
import { ReactDOM } from "react";
import * as auth from "../auth-provider";
import {httpUserInfo} from "../untils/http"
const bootstrapUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
       user = await httpUserInfo('GET',{token})
        
    }
    return user
}

const AuthContext = React.createContext()

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [CateList, setCateList] = useState([]);
    const login = (form)=>auth.login(form).then(data=>{setUser(data)})
    const register = (form)=>auth.register(form).then(user=>setUser(user))
    const logout = ()=>auth.logout().then(()=>setUser(null))
    const updateUser = ()=>bootstrapUser().then(user=>setUser({...user}))
    useEffect(()=>{
        updateUser()
    },[])
    return <AuthContext.Provider children={children} value={{user,login,register,logout,updateUser,CateList, setCateList}}/>
}

export const useAuth = ()=>{
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth必须在AuthProvider中使用")
    }
    return context
}