import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore'



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state)=>{

    root.render(
        <React.StrictMode>

            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}  />

        </React.StrictMode>
    );
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())


