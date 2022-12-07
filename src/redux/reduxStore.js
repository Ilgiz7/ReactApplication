import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilesPage:   profileReducer,
    usersPage: usersReducer

})

let store = createStore(reducers)
window.store = store


export default store