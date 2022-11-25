import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    dialogsPage:    dialogsReducer ,
    profilesPage:   profileReducer

})

let store = createStore(reducers)
window.store = store


export default store