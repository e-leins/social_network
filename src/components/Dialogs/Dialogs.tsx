import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsType = {
    name: string
    id:number
}

function DialogItem(props:DialogsType) {
    return(
         <div className={classes.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name} </NavLink></div>
    )
}
type MessageType ={
    message:string
}
function Message(props:MessageType) {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}
export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Vanya" id={1}/>
                <DialogItem name="Ira" id={2}/>
                <DialogItem name="Marina" id={3}/>
                <DialogItem name="Olya" id={4}/>
            </div>
            
            <div className={classes.messages}>
                <Message message="Hi!"/>
                <Message message="How are you"/>
                <Message message="Nice to meet you!!"/>
                            </div>
        </div>
    )
}