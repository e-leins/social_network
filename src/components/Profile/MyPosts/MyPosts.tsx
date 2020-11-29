import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import { PostType} from "../../../Redux/store";

type ProfilePageType = {
    posts: Array<PostType>
    newPostText:string
    addPost: ()=>void
    updateNewPostText: (text: string) => void

}

export function MyPosts(props: ProfilePageType) {
    const onAddPost = () => {
        props.addPost();
    }

    let postsElements = props.posts.map(posts =>
        <Post key={posts.id}
              id={posts.id}
              message={posts.message}
              likesCount={posts.likesCount}/>);


    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text);
    }


    return (
        <div>
            <div className={classes.posts}><h3>My posts</h3></div>
            <div className={classes.posts}>
                <textarea  value={props.newPostText} onChange={onPostChange}  />
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
                <div>
                    <button> Remove</button>
                </div>
            </div>
            <div className={classes.posts}> {postsElements}</div>
        </div>
    )
}

