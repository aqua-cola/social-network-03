import {v1} from "uuid";
import {ActionTypes, MessagePageType, MessageType} from "./State";

export const messageReducer = (state: MessagePageType, action: ActionTypes) => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessageType = {id: v1(), message: state.newMessageText}
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state;
        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state;
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const changeMessageTextAC = (newText: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        newText
    } as const
}
