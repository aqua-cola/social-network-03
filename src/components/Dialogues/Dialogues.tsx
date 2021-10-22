import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogues.module.css'

type DialogueItemPropsType = {
    id: number,
    NickName: string
}

const DialogueItem = (props: DialogueItemPropsType) => {
    let path = '/dialogues/' + props.id
    return (
        <div className={classes.dialogue}>
            <NavLink to={path} activeClassName={classes.active}>{props.NickName}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    text: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}

export const Dialogues = () => {
    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogues_items}>
                <DialogueItem id={1} NickName={'Хаус'}/>
                <DialogueItem id={2} NickName={'Чейз'}/>
                <DialogueItem id={3} NickName={'Кадди'}/>
                <DialogueItem id={4} NickName={'Уилсон'}/>
                <DialogueItem id={5} NickName={'Форман'}/>
                <DialogueItem id={6} NickName={'Кэмерон'}/>
            </div>
            <div className={classes.messages}>
                <Message text={`Hello... it's me`}></Message>
                <Message text={`How r u?`}></Message>
                <Message text={`Omg...`}></Message>
                <Message text={`Everybody lies`}></Message>
                <Message text={`Give me vicodin`}></Message>
                <Message text={`Diagnostic`}></Message>
            </div>
        </div>
    )
}