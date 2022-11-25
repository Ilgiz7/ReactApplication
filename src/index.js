import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore'
import Provider from "react-redux/es/components/Provider";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <Provider  store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree()


// store.subscribe(()=>{
//     rerenderEntireTree()
// })




