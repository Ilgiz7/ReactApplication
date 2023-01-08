import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import tasksReducer from "./tasksReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilePage:   profileReducer,
    usersPage: usersReducer,
    tasksPage: tasksReducer,
    auth: authReducer
})

let store = createStore(reducers)
window.store = store


export default store