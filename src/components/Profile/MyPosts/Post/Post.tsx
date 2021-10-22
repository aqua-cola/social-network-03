import React from "react";
import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    likeNumber: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img className={classes.ava}
                 src="https://lh3.googleusercontent.com/proxy/EeuGsgm23VXrR6ixvAPoxQgZSUHyGrTGQzdzYvZNpmgiJK7jPsLvs74GLQpMr_jplLtuqnKyDkpxVEd9C0Q6kLrXjNpaHYTc2xcpuV8NW_kBqPQEioQglZK92sfCz0LcLQ"
                 alt="404"/>
            {props.message}
            <div>
                <span className={classes.like}><img src="http://cdn.onlinewebfonts.com/svg/img_95084.png"/></span>
                <span>{props.likeNumber}</span>
            </div>
        </div>
    )
}