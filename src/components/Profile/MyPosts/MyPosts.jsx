import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postsElements = props.profilesPage.map(p=> <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = ()=>{
        props.addPost()

         }

    let onPostChange = ()=>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)


    }

    return (
        <div className={s.postBlock}>
            <div>

                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        ref={newPostElement}/>

                </div>
                <div>
                     <button onClick={onAddPost}>Add Post</button>
                    <button>Remove</button>
                </div>

                <div>
                  <h3>My post</h3>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}


            </div>
        </div>
    )

}





export default MyPosts