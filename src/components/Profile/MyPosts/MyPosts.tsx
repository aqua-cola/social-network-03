import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, StateType} from "../../../redux/State";
import {addPostAC, changePostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    stateMyPosts: StateType
    dispatch: (action: ActionTypes) => void
}

export const MyPosts = ({stateMyPosts, dispatch, ...props}: MyPostsPropsType) => {

    const postElements = stateMyPosts.profilePage.postData.map(p => <Post key={p.id} id={p.id} post={p.post} likeNumber={p.likeNumber} />)

    const addPost = () => {
        dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            let text = e.currentTarget.value
            dispatch(changePostTextAC(text))
        }
    }
    const postValue = stateMyPosts.profilePage.newPostText

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={postValue}/>
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