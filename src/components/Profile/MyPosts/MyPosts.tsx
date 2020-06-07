import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
 export function MyPosts() {
     return (

             <div>
                 <div className={classes.posts}>My posts</div>
                 <div className={classes.posts}>
                     <textarea> </textarea>
                     <button> Add post</button>
                     <button> Remove </button></div>
                 <Post message="Hi, howe are you" likesCount={0}/>
                 <Post message="Im fine, thanks" likesCount={23}/>
             </div>
       )
 }
