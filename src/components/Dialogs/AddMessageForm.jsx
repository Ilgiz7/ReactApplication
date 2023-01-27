import React, {useState} from "react";
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";
import {Navigate} from "react-router";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {updateAction} from "../../redux/hook-form-reducer";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";





const AddMessageForm =   (props)=>{

    const [localNewMessageBody, setlocalNewMessageBody] = useState('localState')

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = data => {
        console.log(data)
        props.sendMessageBodyCreator(data)
            }

     const onChangeInputValue = (e)=>{
        let body = e.target.value
         setlocalNewMessageBody(body)
               }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
            <textarea {...register("newMessageBody")}
                        value={localNewMessageBody}
                      onChange={onChangeInputValue}
                      placeholder='Enter your message'> </textarea>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>);

 }

let  mapStateToProps = (state)=>({
    newMessageBody: state.dialogsPage.newMessageBody

})



export default  connect(mapStateToProps, {updateNewMessageBodyCreator, sendMessageBodyCreator})(AddMessageForm);

