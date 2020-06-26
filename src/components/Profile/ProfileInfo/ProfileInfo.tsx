import React from "react";
import classes from "./ProfileInfo.module.css"


export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2020/05/08/19/09/daisy-flower-5147010_1280.jpg" alt=""/>
            </div>
            <div className ={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
