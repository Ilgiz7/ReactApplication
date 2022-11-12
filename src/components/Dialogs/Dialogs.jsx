import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    let path = '/dialogs/' + props.id
    return <div className={s.dialog+ ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props)=>{
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = (props)=>{

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='ILGIZON' id='1'  />
                <DialogItem name='Ilgiz' id='2'  />
                <DialogItem name='Marat' id='3'  />
                <DialogItem name='Rinat' id='4'  />
                <DialogItem name='Sveta' id='5'  />


            </div>
           <div className={s.messages}>
               <Message message='KAZAN'/>
               <Message message='Hello'/>
               <Message message='Hi'/>
               <Message message='Thank you'/>

           </div>
        </div>
    )

}

export default Dialogs