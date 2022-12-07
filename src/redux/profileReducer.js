const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello ilgiz', likeCount: 25},
        {id: 2, message: 'Thank you', likeCount: 11},
    ],
    defaultTextAreaValue: 'Hello My Friend '

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newObject = {
                id: 3,
                message: state.defaultTextAreaValue,
                likeCount: "0"
            }
            return  {
                ...state,
            posts: [...state.posts, newObject],
            defaultTextAreaValue: ''
            }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                defaultTextAreaValue: action.newText
            }

        }
        default:
            return state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer