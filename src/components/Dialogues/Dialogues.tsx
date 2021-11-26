import React, {ChangeEvent} from "react";
import classes from './Dialogues.module.css'
import {DialogueItem} from "./DialogueItem/DialogueItem";
import {Message} from "./Message/Message";
import {ActionTypes, StateType} from "../../redux/State";
import {changeMessageTextAC, sendMessageAC} from "../../redux/message-reducer";


type DialoguesPropsType = {
    stateDialogues: StateType
    dispatch: (action: ActionTypes) => void
}

export const Dialogues = ({stateDialogues, dispatch, ...props}: DialoguesPropsType) => {

    let dialoguesElements = stateDialogues.messagePage.dialoguesItemData.map(d => <DialogueItem key={d.id}
                                                                                                id={d.id}
                                                                                                name={d.name}
                                                                                                ava={d.ava}/>)
    let messageElements = stateDialogues.messagePage.messageData.map(m => <Message key={m.id}
                                                                                   id={m.id}
                                                                                   message={m.message}/>)

    const addMessage = () => {
        dispatch(sendMessageAC())
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            dispatch(changeMessageTextAC(text))
        }
    }
    const messageValue = stateDialogues.messagePage.newMessageText

    return (
        <div className={classes.dialogues}>
            <div className={classes.dialogues_items}>
                {dialoguesElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={messageValue}
                              placeholder={'Введите сообщение...'}/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
)
}