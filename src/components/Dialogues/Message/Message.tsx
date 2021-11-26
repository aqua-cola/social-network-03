import React from "react";
import classes from './../Dialogues.module.css'

type MessagePropsType = {
    id: string
    message: string
}

export const Message = ({message, ...props}: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}