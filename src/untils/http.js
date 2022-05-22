import qs from 'qs'
import axios from 'axios'
import * as auth from '../context/auth-context'
import {
    message
} from 'antd'
const baseUrl = 'http://www.liulongbin.top:3007'
export const httpUserInfo = async (method, {
    token,
    nickname,
    email,
    id,
    ...customConfig
}) => {
    let data = null;
    if (nickname && email) {
        data = {
            nickname,
            email,
            id
        }
    }
    const config = {
        url: baseUrl + "/my/userinfo",
        method: method,
        data: qs.stringify(data) || '',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
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
    let data = null;
    if (oldPwd && newPwd) {
        data = {
            oldPwd,
            newPwd
        }
    }
    const config = {
        url: baseUrl + "/my/updatepwd",
        method: 'POST',
        data: qs.stringify(data) || '',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    console.log(config);
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
            return Promise.reject(useInfo)
        }
    })
}

//修改头像
export const httpAvatar = async ({
    avatar
}) => {
    let data = null;
    if (avatar) {
        data = {
            avatar
        }
    }
    const config = {
        url: baseUrl + "/my/update/avatar",
        method: 'POST',
        data: qs.stringify(data) || '',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
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
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
            return Promise.reject(useInfo)
        }
    })
}
//
export const addCateList = async (data) => {
    const config = {
        url: baseUrl + "/my/article/addcates",
        method: 'POST',
        data: qs.stringify(data) || '',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
            return Promise.reject(useInfo)
        }
    })
}

//更新分类
export const editCateList = async (data) => {
    const config = {
        url: baseUrl + `/my/article/updatecate/`,
        method: 'POST',
        data: qs.stringify(data) || '',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            return useInfo
        } else {
            return Promise.reject(useInfo)
        }
    })
}
// 删除文章分类
export const deleteCateList = async (id) => {
    const config = {
        url: baseUrl + `/my/article/deletecate/${id}`,
        method: 'GET',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            message.info('删除成功')
            return useInfo
        } else {
            message.info('删除失败')
            return Promise.reject(useInfo)

        }
    })
}

// 删除文章分类
export const getArticleList = async (data) => {
    // const config = {
    //     url: baseUrl + '/my/article/list',
    //     method: 'GET',
    //     data:qs.stringify(data) || '',
    //     headers: {
    //         Authorization: window.localStorage.getItem("token") || '',
    //         "Content-Type": "application/x-www-form-urlencoded",
    //     }
    // }
    // console.log(config);
    return axios.get(`${baseUrl}/my/article/list?${qs.stringify(data)}`,{
        headers: {
                    Authorization: window.localStorage.getItem("token") || '',
                    "Content-Type": "application/x-www-form-urlencoded",
                }
    }).then(async (res) => {
  
        const useInfo = res.data.data
        if (res.data.status === 0) {
            
            return useInfo
        } else {
            message.info('获取失败')
            return Promise.reject(useInfo)

        }
    })
}

//添加文章
export const addArticle = async (data) => {
    var formData = new FormData()
    for (const key in data) {
        formData.append(key,data[key])
      }
    const config = {
        url: baseUrl + `/my/article/add`,
        method: 'POST',
        data: formData,
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "multipart/form-data",
        }
    }
    console.log(config);
    return axios(config).then(async (res) => {
        console.log(res);
        const useInfo = res.data.data
        if (res.data.status === 0) {
            message.info('获取成功')
            return useInfo
        } else {
            message.info('获取失败')
            return Promise.reject(useInfo)

        }
    })
}

// 删除文章
export const deleteArticleList = async (id) => {
    const config = {
        url: baseUrl + `/my/article/delete/${id}`,
        method: 'GET',
        headers: {
            Authorization: window.localStorage.getItem("token") || '',
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    return axios(config).then(async (res) => {
        const useInfo = res.data.data
        if (res.data.status === 0) {
            message.info('删除成功')
            return useInfo
        } else {
            message.info('删除失败')
            return Promise.reject(useInfo)

        }
    })
}