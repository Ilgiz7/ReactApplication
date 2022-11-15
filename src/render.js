import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, {updatePost} from "./redux/state";
import {addPost} from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));

  let rerenderEntireTree = (state)=>{

    root.render(
        <React.StrictMode>

            <App state={state} addPost={addPost} updatePost={updatePost}/>

        </React.StrictMode>
    );
}

export default rerenderEntireTree