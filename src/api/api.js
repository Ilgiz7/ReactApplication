import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f598307b-0a78-4c76-b644-da574e6a9c6a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export  const usersAPI = {
    getUsers: (currentPage=1,pageSize=10 )=>{
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response=> response.data)},

    deleteFollowUser: (userID)=>{
        return instance.delete(`follow/${userID}`)
     },
    startFollowUser: (userID)=>{
        return instance.post(`follow/${userID}`)
    }
}
