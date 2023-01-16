import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer" ;
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps =(dispatch)=>{

    return{
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyCreator(body) )
        },
        sendMessage: ()=>{
            dispatch(sendMessageBodyCreator())
        }
   }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


