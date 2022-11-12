import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


let dialogsData = [
    {id: 1, name: "ILGIZON"},
    {id: 2, name: "Ilgiz"},
    {id: 3, name: "Marat"},
    {id: 4, name: "Rinat"},
    {id: 5, name: "Sveta"},
]

let messageData = [
    {id: 1, message: "KAZAN"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Hi"},
    {id: 4, message: "Thank you"},
    {id: 5, message: "Sorry"},
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

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>


            </div>
        </div>
    )

}

export default Dialogs