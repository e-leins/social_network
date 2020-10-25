import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state";

type ProfilePageType = {
    posts: Array<PostType>
    addPost: (message: string) => void
    newPostText:string
    updateNewPostText:(newText: string) => void
}


export function MyPosts(props: ProfilePageType) {
    const addPost = () => {
        props.addPost(props.newPostText)

    }

    let postsElements = props.posts.map(posts =>
        <Post key={posts.id}
              id={posts.id}
              message={posts.message}
              likesCount={posts.likesCount}/>);
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div>
            <div className={classes.posts}><h3>My posts</h3></div>
            <div className={classes.posts}>
                <textarea  value={props.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}> Add post</button>
                </div>
                <div>
                    <button> Remove</button>
                </div>
            </div>
            <div className={classes.posts}> {postsElements}</div>
        </div>
    )
}

