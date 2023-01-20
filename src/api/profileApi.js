import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f598307b-0a78-4c76-b644-da574e6a9c6a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export  const profileApi = {
    getProfile (userProfileId)  {
         return instance.get(`profile/`+ userProfileId)
    },
    getStatus (userProfileId)  {
        return instance.get(`profile/status/`+ userProfileId)
    },
    updateStatus (userProfileId)  {
        return instance.get(`profile/status/`+ userProfileId)
    },
}