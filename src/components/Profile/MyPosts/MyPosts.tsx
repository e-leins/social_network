import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";



export function MyPosts() {
     let posts =[
         {id:1, message:"Hi, howe are you",likesCount:12 },
         {id:2, message:"Im fine, thanks", likesCount:10},
         {id:3, message:"Nice to meet you!!",likesCount: 0},
     ]
let postsElements= posts.map(posts=> <Post message={posts.message} likesCount={posts.likesCount}/>);
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
