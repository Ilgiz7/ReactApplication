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
                <Post message={postData[0].message} likeCount={postData[0].likeCount}/>
                <Post message={postData[1].message} likeCount={postData[1].likeCount}/>


            </div>
        </div>
    )

}

let postData = [
    {id: 1, message: "Hello ilgiz", likeCount: "25" },
    {id: 2, message: "Thank you", likeCount: "77" },
    ]



export default MyPosts