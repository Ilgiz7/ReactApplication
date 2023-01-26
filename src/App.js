import React from "react";
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import TasksContainer from "./components/Tasks/TasksContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Xooks from "./components/XOOKS/Xooks";
import HookForm from "./components/HookForm/HookForm";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}></Route>
                        <Route path='/tasks' element={<TasksContainer/>}></Route>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/xooks' element={<Xooks/>}/>
                        <Route path='/hookform' element={<HookForm/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>)
}


export default App;
