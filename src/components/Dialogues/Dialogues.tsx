import React, {createRef} from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogues.module.css'
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {stateType} from "../../redux/State";


type DialoguesPropsType = {
    stateDialogues: stateType
}

export const Dialogues = (props: DialoguesPropsType) => {

    let dialoguesElements = props.stateDialogues.messagePage.dialoguesItemData.map(d => <DialogueItem key={d.id} id={d.id} name={d.name} ava={d.ava}/>)
    let messageElements = props.stateDialogues.messagePage.messageData.map(m => <Message key={m.id} id={m.id} message={m.message}></Message>)

    let correspondence = React.createRef<HTMLTextAreaElement>()
    let addMessage = () => {
        let text = correspondence.current?.value
        alert(text)
    }

    return(
        <div className={classes.dialogues}>
            <div className={classes.dialogues_items}>
                {dialoguesElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={correspondence}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
}