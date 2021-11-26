import {v1} from "uuid";
import {addPostAC, changePostTextAC, profileReducer} from "./profile-reducer";
import {changeMessageTextAC, messageReducer, sendMessageAC} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: string
    post: string
    likeNumber: number
}
type DialoguesItemType = {
    id: string
    name: string
    ava: string
}
export type MessageType = {
    id: string
    message: string
}
export type ProfilePageType = {
    postData: Array<PostType>
    newPostText: string
}
export type MessagePageType = {
    dialoguesItemData: Array<DialoguesItemType>
    messageData: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}
export type StateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof changePostTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof changeMessageTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), post: `Hi, how are you?`, likeNumber: 15},
                {id: v1(), post: `It's my first  post`, likeNumber: 20},
                {id: v1(), post: `Hmm`, likeNumber: 2},
                {id: v1(), post: `Oh, yeah`, likeNumber: 202},
            ],
            newPostText: ''
        },
        messagePage: {
            dialoguesItemData: [
                {
                    id: v1(),
                    name: 'Хаус',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                },
                {
                    id: v1(),
                    name: 'Чейз',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                },
                {
                    id: v1(),
                    name: 'Кадди',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                },
                {
                    id: v1(),
                    name: 'Уилсон',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                },
                {
                    id: v1(),
                    name: 'Форман',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                },
                {
                    id: v1(),
                    name: 'Кэмерон',
                    ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"
                }
            ],
            messageData: [
                {id: v1(), message: `Hello... it's me`},
                {id: v1(), message: `How r u?`},
                {id: v1(), message: `Omg...`},
                {id: v1(), message: `Everybody lies`},
                {id: v1(), message: `Give me vicodin`},
                {id: v1(), message: `Diagnostic`},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}