import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile(props:any) {


    return (
        <div className="app-wrapper.content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
