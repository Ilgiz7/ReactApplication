import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";



const Users = (props)=>{


        let pageCount = Math.ceil(props.totalUserCount/props.pageSize)
        let pages = []
        for (let i=1; i<=pageCount; i++){
            pages.push(i)
        }

        return (<div>
            <div>
                {pages.map(p=>{

                  return <span className={props.currentPage === p && s.selectedPage}  onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
                 })}


            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                         </NavLink>
                    </div>

                    <div>
                        {u.followed?
                            <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {

                                                    props.toggleFollowingProgress(true, u.id)

                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {withCredentials: true,
                                // headers: {
                                //     "API-KEY": "f598307b-0a78-4c76-b644-da574e6a9c6a"
                                // }
                                // })

                                usersAPI.deleteFollowUser(u.id)
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    });

                            }}> Unfollow</button>
                               : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {

                                props.toggleFollowingProgress(true, u.id)

                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                //     headers: {
                                //         "API-KEY": "f598307b-0a78-4c76-b644-da574e6a9c6a"
                                //     }})
                                usersAPI.startFollowUser(u.id)
                                    .then((response)=>{
                                        if(response.data.resultCode === 0) {
                                         props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })


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

export default Users