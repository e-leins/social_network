import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
type ProfilePageType={
    posts:Array<PostType>
}
type PostType={
    id:number
    message:string
    likesCount:number
}
export function MyPosts(props:ProfilePageType) {

let postsElements= props.posts.map(posts=> <Post key={posts.id} message={posts.message} likesCount={posts.likesCount}/>);
     return (
             <div>
                 <div className={classes.posts}><h3>My posts</h3></div>
                 <div className={classes.posts}>
                    <div> <textarea> </textarea></div>
                     <div><button> Add post</button></div>
                     <div><button> Remove </button> </div></div>
                 <div className={classes.posts}> {postsElements}</div>
             </div>
       )
 }
