import React from "react";
import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/state";



export function DialogItem(props: DialogType) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}><NavLink to={path}>{props.name} </NavLink></div>
    )
}


