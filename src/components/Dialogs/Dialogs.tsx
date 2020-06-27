import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";


type DialogType={
    id:number
    name:string
}
type MessageType={
    id:number
    message:string
}
type DialogPageType={
    dialogs:Array<DialogType>
    messages:Array<MessageType>
}



export function Dialogs(props:DialogPageType) {
    let dialogsElements = props.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message=><Message message={message.message}/>)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
              </div>
        </div>
    )
}