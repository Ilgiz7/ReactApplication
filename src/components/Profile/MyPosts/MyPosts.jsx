import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


let posts = [
    {id: 1, message: "Hello ilgiz", likeCount: "25" },
    {id: 2, message: "Thank you", likeCount: "77" },
]

let postsElements = posts.map(p=> <Post message={p.message} likeCount={p.likeCount}/>)


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
                {postsElements}


            </div>
        </div>
    )

}





export default MyPosts