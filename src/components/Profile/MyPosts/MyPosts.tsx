import React, {ChangeEvent} from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state";

type ProfilePageType = {
    posts: Array<PostType>
    dispatch:(action:any) => void
    newPostText:string

}


export function MyPosts(props: ProfilePageType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.dispatch({type:'ADD-POST'})
    }

    let postsElements = props.posts.map(posts =>
        <Post key={posts.id}
              id={posts.id}
              message={posts.message}
              likesCount={posts.likesCount}/>);



    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action = {type: 'UPDATE-NEW-POST', newText: text}
            props.dispatch(action)
        }
    }
    return (
        <div>
            <div className={classes.posts}><h3>My posts</h3></div>
            <div className={classes.posts}>
                <textarea  value={props.newPostText} onChange={onPostChange} ref={newPostElement} />
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

