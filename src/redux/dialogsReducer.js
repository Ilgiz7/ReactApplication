const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "ILGIZON"},
        {id: 2, name: "Ilgiz"},
        {id: 3, name: "Marat"},
        {id: 4, name: "Rinat"},
        {id: 5, name: "Sveta"}
    ],
    messages: [
        {id: 1, message: "KAZAN"},
        {id: 2, message: "Hello"},
        {id: 3, message: "Hi"},
        {id: 4, message: "Thank you"},
        {id: 5, message: "Sorry"}
    ],
    newMessageBody: ' '
}

const dialogsReducer = (state = initialState, action)=>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state
    }
}

export  const sendMessageBodyCreator = ()=>({ type: SEND_MESSAGE})

export  const updateNewMessageBodyCreator  = (body)=>({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer