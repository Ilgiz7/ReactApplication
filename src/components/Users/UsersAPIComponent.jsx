import React from "react";
import axios from "axios";
import Users from "./Users";




class UsersAPIComponent extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response)=>{
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=>{
                this.props.setUsers(response.data.items)
            })
     }


    render() {

        return <Users
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


    }
}
export default UsersAPIComponent