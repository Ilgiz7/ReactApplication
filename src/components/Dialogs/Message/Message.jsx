import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";




let dialogs = [
    {id: 1, name: "ILGIZON"},
    {id: 2, name: "Ilgiz"},
    {id: 3, name: "Marat"},
    {id: 4, name: "Rinat"},
    {id: 5, name: "Sveta"}
]

let messages = [
    {id: 1, message: "KAZAN"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Hi"},
    {id: 4, message: "Thank you"},
    {id: 5, message: "Sorry"}
]




const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/> )
let messagesElements = messages.map((m) =>  <Message message={m.message}/> )

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs