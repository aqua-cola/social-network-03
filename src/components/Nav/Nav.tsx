import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div  className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.href}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogues"} activeClassName={classes.href}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.href}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"} activeClassName={classes.href}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"} activeClassName={classes.href}>Settings</NavLink>
            </div>
        </nav>
    )
}