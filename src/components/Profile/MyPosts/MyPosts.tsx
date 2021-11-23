import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {stateType} from "../../../redux/State";


type MyPostsPropsType = {
    stateMyPosts: stateType
    addPost: ()=>void
    changePostText: (newText: string)=>void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.stateMyPosts.profilePage.postData.map(p => <Post id={p.id} post={p.post} likeNumber={p.likeNumber} />)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current)
            props.changePostText(newPostElement.current.value)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.stateMyPosts.profilePage.newPostText}/>
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