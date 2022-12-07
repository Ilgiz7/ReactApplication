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

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
            this.props.setUsers(response.data.items)
        })

    }


    // getUsers = ()=>{
   //      if (this.props.users.length===0) {
   //          axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response)=>{
   //              this.props.setUsers(response.data.items)
   //          })
   //      }
   //  }


    render() {
        return (<div>
            <div>
                <span>1</span>
                <span className={s.seletedPage}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>

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
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Unfollow</button>
                        }

                    </div>

                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <dic>{"u.location.city"}</dic>
                        <dic>{"u.location.country"}</dic>

                    </span>
                </span>

                </div>)

            }


        </div>)
    }
}
export default Users