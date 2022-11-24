import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        dialogsPage : {
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
        },

        profilesPage: {
            posts: [
                {id: 1, message: 'Hello ilgiz', likeCount: 25},
                {id: 2, message: 'Thank you', likeCount: 11},
            ],
            defaultTextAreaValue: 'Hello My Friend '

        }},

    _callSubsriber () {
        console.log('State was changed')},

    subscribe: (observer)=>{
        store._callSubsriber = observer
    },

    getState (){
        return this._state
    },


    // addPost () {
    //
    //     const newObject= {
    //         id: 3,
    //         message: this._state.profilesPage.defaultTextAreaValue,
    //         likeCount: "0"
    //          }
    //     this._state.profilesPage.posts.push(newObject)
    //     this._state.profilesPage.defaultTextAreaValue = ''
    //     this._callSubsriber(store)
    //          },
    //
    // updateNewPost(text) {
    //
    //     this._state.profilesPage.defaultTextAreaValue  = text
    //     this._callSubsriber(store)
    // },

    dispatch (action){

        this._state.profilesPage = profileReducer(this._state.profilesPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubsriber(store)


    }

}





export default store
window.store= store