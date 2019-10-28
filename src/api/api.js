import axios from 'axios'
let base ='';

//login
export const requestLogin = params => {
    return axios.post(`${base}/login`,params).then(res => res.data)
}

//getUserList
export const getUserList = params => {
    return axios.get(`${base}/user/list`,{params:params})
}

//getUserListPage
export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`,{params:params})
}

//removeUser
export const removeUser = params => {
    return axios.get(`${base}/user/remove`,{params:params})
}

//bathRemoveUser
export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`,{params:params})
}

//editUser
export const editUser = params => {
    return axios.get(`${base}/user/edit`,{params:params})
}

//addUser
export const addUser = params =>{
    return axios.get(`${base}/user/add`,{params:params})
}