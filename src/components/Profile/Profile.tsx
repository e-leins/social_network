import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch:(action:any) => void
    newPostText:string

}
export function Profile(props:PropsType) {
    return (
        <div className="app-wrapper.content">
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
