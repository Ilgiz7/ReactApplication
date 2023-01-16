import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber)=>{

        this.props.getUsers(pageNumber,this.props.pageSize)

           }



    render() {


        return <>
            {this.props.isFetching ? <Preloader/>  : null}
        <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUserCount={this.props.totalUserCount}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            componentDidMount={this.props.componentDidMount}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}

        />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch)=>{
//
//     return{
//         follow: (userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId)=>{
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//          },
//         setTotalUserCount: (totalCount)=>{
//             dispatch(setUsersTotalCountAC(totalCount))
//          },
//          setIsFetching: (isFetching)=>{
//              dispatch(changeIsFetchingAC(isFetching))
//           }
//     }
//
// }

export default compose(
    connect(mapStateToProps,{ follow, unfollow, setCurrentPage, toggleFollowingProgress,getUsers}),
    withAuthRedirect
)(UsersContainer)




