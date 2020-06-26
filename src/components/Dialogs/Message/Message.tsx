import React from "react";
import classes from "./Message.module.css"



type MessageType = {
    message: string

}
export function Message(props: MessageType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}
