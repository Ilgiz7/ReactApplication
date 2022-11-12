import React from "react";
import s from './Post.module.css'
import {getMouseEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

const Post = (props)=>{

    return (

                <div className={s.item}>
                    <img src="https://klike.net/uploads/posts/2021-12/1638345229_2.jpg" alt=""/>
                        {props.message}
                    <div>
                    <span>Like: {props.likeCount}</span>
                    </div>
                </div>

    )

}

export default  Post