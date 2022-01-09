import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"

const store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [{
                    id: 1,
                    avatar: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png',
                    title: 'My ferst post',
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, soluta.',
                    likeCount: '10'
                },
                {
                    id: 2,
                    avatar: '',
                    title: 'My second post',
                    message: 'Lorem consectetur dolor sit amet, consectetur adipisicing elit. Aspernatur, soluta.',
                    likeCount: '17'
                },
                {
                    id: 3,
                    avatar: 'https://pristor.ru/wp-content/uploads/2019/11/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA001.jpg',
                    title: 'My three post',
                    message: 'Тестовая статья для социальной сети на React.js',
                    likeCount: '43'
                },
                {
                    id: 4,
                    avatar: '',
                    title: 'My fourth post',
                    message: 'Тестовая статья просто текст.',
                    likeCount: '25'
                }
            ]
        },
        dialogsPage: {
            newTextMessage: '',
            dialogs: [
                { id: '1', name: 'Dima Melnik' },
                { id: '2', name: 'Иван Иванов' },
                { id: '3', name: 'Elena Pupkina' },
                { id: '4', name: 'Сергей Петрович' }
            ],
            messages: [{
                    id: '1',
                    name: 'Dima',
                    message: 'Message lorem ipsum text lorem ipsum textlorem ipsum text...',
                    avatarUrl: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png'
                },
                {
                    id: '2',
                    name: 'Elena',
                    message: 'Message lorem ipsum text 😀😁😁 lorem ipsum text...',
                    avatarUrl: 'https://sun1-92.userapi.com/s/v1/ig1/Wk5VtbBWP2wswKGGhxhmaPyJATnmJtJ4INMqU53_ytzkiHYfHyZkVzLe7ICeWB8LYdVelJzV.jpg?size=200x0&quality=96&crop=1,3,1195,1195&ava=1'
                },
                {
                    id: '1',
                    name: 'Dima',
                    message: 'Message lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text...',
                    avatarUrl: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png'
                }
            ]
        },
        sidebar: {
            menu: [{
                    name: 'Profile',
                    path: '/profile'
                },
                {
                    name: 'Dialogs',
                    path: '/dialogs'
                },
                {
                    name: 'News',
                    path: '/news'
                },
                {
                    name: 'Music',
                    path: '/music'
                }
            ],
            myFriends: [{
                    avatarUrl: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
                    name: 'Piter'
                },
                {
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRwUk-DnJwwHjMjK9w2TRPkhJP-8tY-WQYw&usqp=CAU',
                    name: 'Bred'
                },
                {
                    avatarUrl: 'https://sun1-92.userapi.com/s/v1/ig1/Wk5VtbBWP2wswKGGhxhmaPyJATnmJtJ4INMqU53_ytzkiHYfHyZkVzLe7ICeWB8LYdVelJzV.jpg?size=200x0&quality=96&crop=1,3,1195,1195&ava=1',
                    name: 'Elena'
                }
            ]
        }
    },

    _callSubscriber() {
        console.log('reload app')
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = navbarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store