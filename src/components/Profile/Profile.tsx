import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, StateType } from "../../redux/State";


type ProfilePropsType = {
    stateProfile: StateType
    dispatch: (action: ActionTypes) => void
}

export const Profile = ({stateProfile, dispatch, ...props}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts stateMyPosts={stateProfile} dispatch={dispatch}/>
        </div>
    )
}