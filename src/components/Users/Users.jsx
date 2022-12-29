import React from "react";
import s from './users.module.css'
import userPhoto from '../../assets/images/user.png'



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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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