import {profileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello ilgiz', likeCount: 25},
        {id: 2, message: 'Thank you', likeCount: 11},
    ],
    defaultTextAreaValue: 'Hello My Friend ',
    profile: null

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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }


        default:
            return state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

// export const getUserProfile = (userProfileId)=>{
//     return (dispatch)=>{
//         profileApi.getProfile(userProfileId)
//             .then(response=>{
//                 dispatch(setUserProfile(response.data))
//             })
//      }
//  }

export const getUserProfile = (userProfileId)=> (dispatch)=>{

        profileApi.getProfile(userProfileId)
            .then(response=>{
                dispatch(setUserProfile(response.data))
            })
    }



export default profileReducer