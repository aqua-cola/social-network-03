import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {stateType} from "../../redux/State";


type ProfilePropsType = {
    stateProfile: stateType
    addPost: (post: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts stateMyPosts={props.stateProfile} addPost={props.addPost}/>
        </div>
    )
}