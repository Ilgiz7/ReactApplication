import rerenderEntireTree from "../render";

let  state ={
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
        ]

    },

    profilesPage: {
        posts: [
            {id: 1, message: 'Hello ilgiz', likeCount: 25 },
            {id: 2, message: 'Thank you', likeCount: 11 },
        ],
         defaultTextAreaValue: 'Hello My Friend '
    }

}

window.state = state

export let addPost = ()=>{

    const newObject= {
        id: 3,
        message: state.profilesPage.defaultTextAreaValue,
        likeCount: "0"
   }

    state.profilesPage.posts.push(newObject)
    state.profilesPage.defaultTextAreaValue = ''
    rerenderEntireTree(state)
}

export let updatePost = (text)=> {

    state.profilesPage.defaultTextAreaValue  = text
    rerenderEntireTree(state)
}


export default state