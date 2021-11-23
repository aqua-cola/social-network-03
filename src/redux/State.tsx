import {v1} from "uuid";

export type PostType = {
    id: string
    post: string
    likeNumber: number
}
export type DialoguesItemType = {
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
export type messagePageType = {
    dialoguesItemData: Array<DialoguesItemType>
    messageData: Array<MessageType>
}
export type SidebarType = {

}

export type stateType = {
    profilePage: ProfilePageType
    messagePage: messagePageType
    sidebar: SidebarType
}

export const state: stateType = {
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
            {id: v1(), name: 'Хаус', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"},
            {id: v1(), name: 'Чейз', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"},
            {id: v1(), name: 'Кадди', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"},
            {id: v1(), name: 'Уилсон', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"},
            {id: v1(), name: 'Форман', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"},
            {id: v1(), name: 'Кэмерон', ava: "https://img0.liveinternet.ru/images/attach/c/1//55/561/55561660_1266873768_1251725443586.jpg"}
        ],
        messageData: [
            {id: v1(), message: `Hello... it's me`},
            {id: v1(), message: `How r u?`},
            {id: v1(), message: `Omg...`},
            {id: v1(), message: `Everybody lies`},
            {id: v1(), message: `Give me vicodin`},
            {id: v1(), message: `Diagnostic`},
        ]
    },
    sidebar: {}
}

export const addPost = () => {
    const newPost: PostType = {id: v1(), post: state.profilePage.newPostText, likeNumber: 0}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    renderTree()
}
export const changePostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree()
}

let renderTree = () => {}

export const subscribe = (observer: ()=>void) => {
    renderTree = observer
}
