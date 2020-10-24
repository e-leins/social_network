import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/state";

type ProfilePageType = {
    posts: Array<PostType>
    addPost: (message: string) => void
}


export function MyPosts(props: ProfilePageType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

    }
    let onPostChange= ()=> {}
    let postsElements = props.posts.map(posts => <Post key={posts.id} id={posts.id} message={posts.message}
                                                       likesCount={posts.likesCount}/>);
    return (
        <div>
            <div className={classes.posts}><h3>My posts</h3></div>
            <div className={classes.posts}>
                <textarea  onChange= {onPostChange} ref={newPostElement} />
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
