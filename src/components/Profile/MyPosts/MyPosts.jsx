import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div className={s.postBlock}>
            <div>

                <div>
                    <textarea/>

                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>

                <div>
                  <h3>My post</h3>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello ilgiz' likeCount='25'/>
                <Post message='Thank you' likeCount='77'/>

            </div>
        </div>
    )

}

export default MyPosts