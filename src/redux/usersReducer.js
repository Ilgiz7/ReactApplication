import {userApi} from "../api/userApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [ ],
    pageSize: 100,
    totalUserCount: 0,
    currentPage:1,
    isFetching: true,
    followingInProgress: []


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                         return {...u, followed: false}

                    }
                    return u
                })

            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUserCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id=!action.userId)
            }
        default:
            return state
    }


}




export const followSuccsess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccsess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUserCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = ( currentPage,pageSize )=> {

    return (dispatch)=>{

        dispatch(setIsFetching(true))
        userApi.getUsers(currentPage,pageSize )
            .then(data =>{
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
                dispatch(setIsFetching(false))
                dispatch(setCurrentPage(currentPage))
            })
    }
}

export const follow = ( userID )=> {
    return (dispatch)=>{

        dispatch(toggleFollowingProgress(true, userID))

        userApi.startFollowUser(userID)
            .then((response)=>{
                if(response.data.resultCode === 0) {
                    dispatch(followSuccsess(userID))
                }

                dispatch(toggleFollowingProgress(false, userID))
            })
    }
}

export const unfollow = ( userID )=> {
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, userID))

        userApi.deleteFollowUser(userID)
            .then((response)=>{
                if(response.data.resultCode === 0) {
                    dispatch(unfollowSuccsess(userID))
                }
                dispatch(toggleFollowingProgress(false, userID))
            })
    }
}

export default usersReducer