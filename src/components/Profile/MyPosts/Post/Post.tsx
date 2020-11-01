import React from "react";
import classes from "./Post.module.css"
import {PostType} from "../../../../Redux/store";


 export function Post(props:PostType) {
     return (

                 <div className={classes.item}> {props.message}<span> {props.likesCount}</span></div>

       )
 }
