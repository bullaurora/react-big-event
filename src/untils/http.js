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
        data:qs.stringify(data)||'',
        headers: {
            Authorization:window.localStorage.getItem("token")||'',
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

//修改密码
export const httpPwd = async ({
    oldPwd,
    newPwd,
    ...customConfig
}) => {  
    let data=null;
    if (oldPwd&&newPwd) {
        data = {oldPwd,newPwd}
    }
    const config = {
        url: baseUrl + "/my/updatepwd",
        method: 'POST', 
        data:qs.stringify(data)||'',
        headers: {
            Authorization:window.localStorage.getItem("token")||'',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    console.log(config);
    return axios(config).then(async (res)=>{
        const useInfo = res.data.data
        if (res.data.status===0){
            return useInfo
        }else {
            return Promise.reject(useInfo)
        }
    })
}

//修改头像
export const httpAvatar = async ({
    avatar
}) => {  
    let data=null;
    if (avatar) {
        data = {avatar}
    }
    const config = {
        url: baseUrl + "/my/update/avatar",
        method: 'POST', 
        data:qs.stringify(data)||'',
        headers: {
            Authorization:window.localStorage.getItem("token")||'',
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

//得到文章

export const httpCateList = async () => {  
    const config = {
        url: baseUrl + "/my/article/cates",
        method: 'GET', 
        headers: {
            Authorization:window.localStorage.getItem("token")||'',
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
//
export const addCateList = async (data) => {  
    const config = {
        url: baseUrl + "/my/article/addcates",
        method: 'POST', 
        data:qs.stringify(data)||'',
        headers: {
            Authorization:window.localStorage.getItem("token")||'',
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