const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogs: [
        { id: '1', name: 'Dima Melnik' },
        { id: '2', name: 'Иван Иванов' },
        { id: '3', name: 'Elena Pupkina' },
        { id: '4', name: 'Сергей Петрович' }
    ],
    messages: [{
            id: '11',
            name: 'Dima',
            message: 'Message lorem ipsum text lorem ipsum textlorem ipsum text...',
            avatarUrl: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png'
        },
        {
            id: '22',
            name: 'Elena',
            message: 'Message lorem ipsum text 😀😁😁 lorem ipsum text...',
            avatarUrl: 'https://sun1-92.userapi.com/s/v1/ig1/Wk5VtbBWP2wswKGGhxhmaPyJATnmJtJ4INMqU53_ytzkiHYfHyZkVzLe7ICeWB8LYdVelJzV.jpg?size=200x0&quality=96&crop=1,3,1195,1195&ava=1'
        },
        {
            id: '12',
            name: 'Dima',
            message: 'Message lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text...',
            avatarUrl: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png'
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: state.messages.length + 1,
                name: 'DDD',
                message: action.massage.text,
                avatarUrl: ''
            }
            return {
                ...state,
                messages: [...state.messages, message]
            }

        default:
            return state
    }
}
export default dialogsReducer

export const sendMessage = massage => ({ type: SEND_MESSAGE, massage })