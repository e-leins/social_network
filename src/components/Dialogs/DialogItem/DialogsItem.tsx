import React from "react";
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id: number
}


export function DialogItem(props: DialogsType) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}><NavLink to={path}>{props.name} </NavLink></div>
    )
}


