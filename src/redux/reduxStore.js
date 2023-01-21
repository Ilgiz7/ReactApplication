import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import tasksReducer from "./tasksReducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilePage:   profileReducer,
    usersPage: usersReducer,
    tasksPage: tasksReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store


export default store