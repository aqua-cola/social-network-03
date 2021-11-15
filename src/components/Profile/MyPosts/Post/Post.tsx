import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    post: string
    id: string
    likeNumber: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img className={classes.ava}
                 src="https://shutniki.club/wp-content/uploads/2019/12/11-321.jpg"
                 alt="404"/>
            {props.post}
            <div>
                <span className={classes.like}><img src="http://cdn.onlinewebfonts.com/svg/img_95084.png"/></span>
                <span>{props.likeNumber}</span>
            </div>
        </div>
    )
}