import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";


let dialogs =[
    {id:1, name:'Vanya'},
    {id:2, name:'Ira'},
    {id:3, name:'Marina'},
    {id:4, name:'Olya'},
    {id:5, name:'Tema'},
]
let dialogsElements = dialogs.map(dialog=><DialogItem name={dialog.name} id={dialog.id}/>);

let messages =[
    {id:1, message:"Hi!"},
    {id:2, message:"How are you"},
    {id:3, message:"Nice to meet you!!"},
    ]

let messagesElements = messages.map(message=><Message message={message.message}/>)


export function Dialogs() {
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