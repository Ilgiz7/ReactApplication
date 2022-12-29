import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import tasksReducer from "./tasksReducer";

let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilesPage:   profileReducer,
    usersPage: usersReducer,
    tasksPage: tasksReducer

})

let store = createStore(reducers)
window.store = store


export default store