import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogues.module.css'

type DialoguesItemPropsType = {
    id: string
    name: string
    ava: string
}

export const DialogueItem = ({id, name, ava, ...props}: DialoguesItemPropsType) => {
    let path = '/dialogues/' + id
    return (
        <div className={classes.dialogue}>
            <img src={ava} alt="404"/>
            <NavLink to={path} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}