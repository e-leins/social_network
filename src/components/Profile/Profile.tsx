import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className="app-wrapper.content">
           <div> <img src="https://cdn.pixabay.com/photo/2020/05/08/19/09/daisy-flower-5147010_1280.jpg" alt=""/></div>
            <div> ava + description </div>
        <MyPosts/>
</div>
    )
}
