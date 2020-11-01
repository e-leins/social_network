import React from "react";
import classes from "./Message.module.css"
import {MessageType} from "../../../Redux/store";



export function Message(props: MessageType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}
