import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/store";


type DialogsType = {
    updateNewMessageBody:(body:string)=>void;
    sendMessage:()=> void;
    dialogsPage:DialogPageType;

}

export function Dialogs(props:DialogsType) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message=><Message message={message.message} id={message.id}/>)
    let newMessageBody=state.newMessageBody;
    let onSendMessage= ()=>{
        props.sendMessage();
    };
    let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=> {
        let body=e.currentTarget.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <div><textarea
                         value ={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
              </div>
        </div>
    )
}