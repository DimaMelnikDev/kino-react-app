const initialState = {
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
        },
        {
            name: 'Users',
            path: '/users'
        }
    ],
    myFriends: [{
            id: "454",
            avatarUrl: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
            name: 'Piter'
        },
        {
            id: "4574",
            avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRwUk-DnJwwHjMjK9w2TRPkhJP-8tY-WQYw&usqp=CAU',
            name: 'Bred'
        },
        {
            id: "4524",
            avatarUrl: 'https://sun1-92.userapi.com/s/v1/ig1/Wk5VtbBWP2wswKGGhxhmaPyJATnmJtJ4INMqU53_ytzkiHYfHyZkVzLe7ICeWB8LYdVelJzV.jpg?size=200x0&quality=96&crop=1,3,1195,1195&ava=1',
            name: 'Elena'
        }
    ]
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}
export default navbarReducer