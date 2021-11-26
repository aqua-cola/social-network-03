import {v1} from "uuid";
import {ActionTypes, PostType, ProfilePageType} from "./State";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: v1(), post: state.newPostText, likeNumber: 0}
            state.postData.push(newPost)
            state.newPostText = ''
            return state;
        case 'CHANGE-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state
    }

}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const changePostTextAC = (newText: string) => {
    return {
        type: 'CHANGE-POST-TEXT',
        newText
    } as const
}