import React from "react";
import s from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'



class Users extends React.Component{
    // constructor(props) {
    //     super(props);
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
    //         this.props.setUsers(response.data.items)
    //     })
    //
    // }

    // getUsers = ()=>{
    //      if (this.props.users.length===0) {
    //          axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
    //              this.props.setUsers(response.data.items)
    //          })
    //      }
    //  }

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

        let pageCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        let pages = []
        for (let i=1; i<=pageCount; i++){
            pages.push(i)
        }

        return (<div>
            <div>
                {pages.map(p=>{
                  return <span className={this.props.currentPage === p && s.selectedPage}  onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
                 })}


            </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }

                    </div>

                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>

                    </span>
                </span>

                </div>)

            }


        </div>)
    }
}
export default Users