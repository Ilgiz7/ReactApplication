import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f598307b-0a78-4c76-b644-da574e6a9c6a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export  const authApi = {
    getAuth: () => {
        return instance.get(`auth/me` )
    }
}