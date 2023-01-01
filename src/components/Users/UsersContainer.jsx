import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/Wedges-3s-284px.svg'
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
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
        isFetching: state.usersPage.isFetching
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


export default  connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching
})(UsersContainer)


