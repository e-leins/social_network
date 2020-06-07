import React from "react";
import classes from "./Post.module.css"

type PostType ={
    message:string
    likesCount:number

}
 export function Post(props:PostType) {
     return (

                 <div className={classes.item}> {props.message}<span> {props.likesCount}</span></div>

       )
 }
