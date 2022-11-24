import React from "react";
import {addPostActionCreator, onPostChangeActionCreator, updatePost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
    let state = props.store.getState()



    let addPost = ()=>{
            props.store.dispatch(addPostActionCreator())
         }

    let onPostChange = (text)=>{
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action )

    }

    return ( <MyPosts updateNewPostText={onPostChange}
                      addPost={addPost}
                      posts={state.profilesPage.posts}
                      newPostText ={ state.profilesPage.defaultTextAreaValue}/>)

}





export default MyPostsContainer