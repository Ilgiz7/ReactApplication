import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = ()=>{

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile/27391'   className={({ isActive }) => isActive ? s.activeLink : '' }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : ''}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({ isActive }) => isActive ? s.activeLink : ''}>Users</NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to="/news" className={({ isActive }) => isActive ? s.activeLink : ''}>News</NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to="/music" className={({ isActive }) => isActive ? s.activeLink : ''}>Music</NavLink>
            </div>

            <div  className={s.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? s.activeLink : ''}>Settings</NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to="/tasks" className={({ isActive }) => isActive ? s.activeLink : ''}>Tasks</NavLink>
            </div>
        </nav>
    )

}

export default  Navbar