import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
        store: StoreType


}
export function Profile(props:PropsType) {
    return (
        <div className="app-wrapper.content">
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
