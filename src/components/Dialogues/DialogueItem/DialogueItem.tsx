import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogues.module.css'

type DialoguesItemPropsType = {
    id: string
    name: string
    ava: string
}

export const DialogueItem = (props: DialoguesItemPropsType) => {
    let path = '/dialogues/' + props.id
    return (
        <div className={classes.dialogue}>
            <img src={props.ava} alt="404"/>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}