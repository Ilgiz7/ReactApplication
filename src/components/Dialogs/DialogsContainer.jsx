import React from "react";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer" ;
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps =(state)=>{

    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch)=>{

    return{
        updateNewMessageBody: ()=>{
            dispatch(sendMessageBodyCreator())
        },
        sendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer