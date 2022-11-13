import rerenderEntireTree from "../render";

let  state ={
    profilesPage: {
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

    dialogsPage: {
        posts: [
            {id: 1, message: 'Hello ilgiz', likeCount: 25 },
            {id: 2, message: 'Thank you', likeCount: 11 },
        ]
    }

}

export let addPost = (postMessage)=>{

    const newObject= {
        id: 3,
        message: postMessage,
        likeCount: "0"
   }

    state.dialogsPage.posts.push(newObject)
    rerenderEntireTree(state)
}

export default state