import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {changePostText, stateType} from "../../redux/State";


type ProfilePropsType = {
    stateProfile: stateType
    addPost: ()=>void
    changePostText: (newText: string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts stateMyPosts={props.stateProfile} addPost={props.addPost} changePostText={changePostText}/>
        </div>
    )
}