import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";





const AddMessageForm =   (props)=>{

    const [localNewMessageBody, setlocalNewMessageBody] = useState('localState')

    const { register, handleSubmit } = useForm();

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

