import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogPageType, PostType} from "../../Redux/state";


type DialogsType = {
    state: DialogPageType

}

export function Dialogs(props:DialogsType) {
    let dialogsElements = props.state.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message=><Message message={message.message} id={message.id}/>)
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