import {authApi} from "../api/authApi";
import {setCurrentPage, setIsFetching, setTotalUserCount, setUsers} from "./usersReducer";

const SET_USER_DATA = 'SET-USER-DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
 }

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }

        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login }})

export const getAuthorization = ()=>{
  return (dispatch)=>{
      authApi.getAuth()
          .then(response=>{
                      if (response.data.resultCode===0) {
                          let {id, email, login } = response.data.data
                          dispatch(setAuthUserData(id, email, login))}})
     }
}

export default authReducer