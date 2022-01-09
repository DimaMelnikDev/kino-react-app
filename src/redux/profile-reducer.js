import { profileApi, userApi } from '../api/api'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'

const initialState = {
    status: '',
    posts: [{
        id: 1,
        avatar: 'https://s3.tradingview.com/userpics/5245339-JbWV_mid.png',
        title: 'DarkSleit',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, soluta.',
        likeCount: '10'
    }],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts.length + 1,
                avatar: '',
                title: 'DarkSleit',
                message: action.newPostText.text,
                likeCount: 2
            }
            return {
                ...state,
                posts: [...state.posts, post]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profileInfo
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}
export default profileReducer

// action
export const addPost = newPostText => ({
    type: ADD_POST,
    newPostText
})

export const setUserProfile = profileInfo => ({
    type: SET_USER_PROFILE,
    profileInfo
})
export const setUserStatus = status => ({
    type: SET_USER_STATUS,
    status
})
export const updateUserStatus = status => ({
    type: UPDATE_USER_STATUS,
    status
})

// thunks
export const getProfile = userId => dispath => {
        userApi.getProfile(userId).then(data => {
            dispath(setUserProfile(data))

            profileApi.getStatus(userId).then(data => {
                dispath(setUserStatus(data))
            })
        })
    }
    // export const getStatus = userId => dispath => {
    //     profileApi.getStatus(userId).then(data => {
    //         dispath(setUserStatus(data))
    //     })
    // }
export const updateStatus = status => dispath => {
    profileApi.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispath(updateUserStatus(status))
        }
    })
}