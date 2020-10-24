import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    state: ProfilePageType
    addPost:(message:string)=>void
}
export function Profile(props:PropsType) {


    return (
        <div className="app-wrapper.content">
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
            addPost={props.addPost}
            />
        </div>
    )
}
