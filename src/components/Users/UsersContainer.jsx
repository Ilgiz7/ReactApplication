import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch)=>{

    return{
        follow: (userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
         },
        setTotalUserCount: (totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
         }
    }

}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)

export default  UsersContainer
