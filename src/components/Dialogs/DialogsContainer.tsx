import React, {ChangeEvent} from "react";
import { sendMessageCreator,  StoreType, updateNewMessageBodyCreator} from "../../Redux/store";
import {Dialogs} from "./Dialogs";


type PropsType = {
     store:StoreType
}

export function DialogsContainer(props:PropsType) {
    let state = props.store.getState().dialogsPage;
      let onSendMessage= ()=>{
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange=(body:any)=> {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return <Dialogs  updateNewMessageBody={onNewMessageChange}
                     sendMessage ={onSendMessage}
                     dialogsPage={state}/>

}