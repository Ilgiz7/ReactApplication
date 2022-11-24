import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import store from "../../redux/reduxStore"
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer" ;
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state=store.getState().dialogsPage

    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageBodyCreator())
    }

    let onNewMessageChange = (body)=>{
            props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state}

    /> )

}

export default DialogsContainer