import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import tasksReducer from "./tasksReducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";
import hookFormReducer from "./hook-form-reducer"




let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilePage:   profileReducer,
    usersPage: usersReducer,
    tasksPage: tasksReducer,
    auth: authReducer,
    hookFormState : hookFormReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store


export default store