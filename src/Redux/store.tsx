import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number

}
export type DialogType = {
    id: number
    name: string

}
export type MessageType = {
    id: number
    message: string

}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody:any


}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType


}
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postText: string) => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch:(action:any) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, howe are you", likesCount: 12},
                {id: 2, message: "Im fine, thanks", likesCount: 10},
                {id: 3, message: "Nice to meet you!!", likesCount: 0},
            ],
            newPostText: 'It-kama'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vanya'},
                {id: 2, name: 'Ira'},
                {id: 3, name: 'Marina'},
                {id: 4, name: 'Olya'},
                {id: 5, name: 'Tema'},
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Nice to meet you!!"},
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        //this._state.sidebarPage= dialogsReducer(this._state.sidebarPage, action);
        this._callSubscriber();
    }
}

        export const addPostActionCreator = () => ({type: ADD_POST})
        export const updateNewPostTextActionCreator = (text: any) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
        export const sendMessageCreator = () => ({type: SEND_MESSAGE})
        export const updateNewMessageBodyCreator = (body: any) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



 //window.store =store;

