import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {updatePost} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilesPageState.posts}
                     defaultTextAreaValue={props.profilesPageState.defaultTextAreaValue}
                     addPost={props.addPost}
                     updatePost={props.updatePost}
            />/>
        </div>
    )

}

export default Profile