import React from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Navigate} from "react-router";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {updateAction} from "../../redux/hook-form-reducer";
import AddMessageForm from "./AddMessageForm";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>)
    let newMessageBodyToProps = state.newMessageBody

    if (!props.isAuth) return  <Navigate to="/login"  />


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <AddMessageForm newMessageBodyToProps={newMessageBodyToProps}
                                onSendMessageClick={onSendMessageClick}
                                onNewMessageChange={onNewMessageChange}/>
            </div>
        </div>
    )

}



export default Dialogs