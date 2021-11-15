import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {stateType} from "../../../redux/State";


type MyPostsPropsType = {
    stateMyPosts: stateType
    addPost: (post: string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.stateMyPosts.profilePage.postData.map(p => <Post id={p.id} post={p.post} likeNumber={p.likeNumber} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>

        </div>
    )
}