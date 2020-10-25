import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost:(message:string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}
export function Profile(props:PropsType) {
    return (
        <div className="app-wrapper.content">
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
