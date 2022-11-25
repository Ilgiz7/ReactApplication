import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps =(state)=>{

    return{
        profilesPage: state.profilesPage.posts,
        newPostText: state.profilesPage.defaultTextAreaValue
    }
}

let mapDispatchToProps =(dispatch)=>{

    return{
        updateNewPostText: (text)=>{
            dispatch(onPostChangeActionCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }

    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer