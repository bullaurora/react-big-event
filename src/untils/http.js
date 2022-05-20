import qs from 'qs'
import axios from 'axios'
import * as auth from '../context/auth-context'
const baseUrl = 'http://www.liulongbin.top:3007'
export const httpUserInfo = async (method,{
    token,
    nickname,
    email,
    id,
    ...customConfig
}) => {  
    let data=null;
    if (nickname&&email) {
        data = {nickname,email,id}
    }
    const config = {
        url: baseUrl + "/my/userinfo",
        method: method, 
        data,
        headers: {
            Authorization:token?token:'',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res)=>{
        const useInfo = res.data.data
        if (res.data.status===0){
            return useInfo
        }else {
            return Promise.reject(useInfo)
        }
    })
}