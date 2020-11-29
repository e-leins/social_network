import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostActionCreator, PostType, store, StoreType, updateNewPostTextActionCreator} from "../../../Redux/store";
import {MyPosts} from "./MyPosts";

type ProfilePageType = {
    store: StoreType

}

function MyPostsContainer(props: ProfilePageType) {
    const state = store.getState();
    const addPost = () => {
            props.store.dispatch(addPostActionCreator())
    }


    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }


    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts ={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;