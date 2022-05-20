import axios from "axios";
import qs from "qs"
const baseUrl = "http://www.liulongbin.top:3007";
//取地token
export const getToken = () => window.localStorage.getItem('token')

//设置token
export const saveToken = ({
    data
}) => {
    window.localStorage.setItem('token', data.token || '')
    return data
}

export const login = (data) => {
    return axios
        .post(baseUrl + "/api/login", qs.stringify(data), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        .then(async (res) => {
            if (res.data.status===0) {
                // console.log(res);
                return saveToken(res)
            }else{
                return Promise.reject()
            }
        });
}

export const register = (data) => {
    return axios
        .post(baseUrl + "/api/reguser", qs.stringify(data), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        .then(async (res) => {
            if (res.status===200) {
                return saveToken(res)
            }else{
                return Promise.reject()
            }
        });
}

export const logout = async ()=>window.localStorage.removeItem('token')

