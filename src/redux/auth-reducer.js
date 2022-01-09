import { setUserProfile } from '../redux/profile-reducer'
import { authApi, profileApi } from '../api/api'
import { stopSubmit } from 'redux-form'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case DELETE_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: false
            }
        default:
            return state
    }
}

export default authReducer
// actions
export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        id,
        email,
        login
    }
})
export const deleteAuthUserData = () => ({
    type: DELETE_AUTH_USER_DATA,
    payload: {
        id: null,
        email: null,
        login: null
    }
})

// thunks
export const authMe = () => dispath => {
    return authApi.authMe().then(data => {
        if (data.resultCode === 0) {
            const { id, email, login } = data.data
            dispath(setAuthUserData(id, email, login))

            profileApi.getProfile(id).then(data => {
                dispath(setUserProfile(data))
                    // dispath(getStatus(id))
            })
        }
    })
}

export const login = (email, password, rememberMe) => dispath => {
    authApi.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispath(authMe(data))
        } else {
            let err = data.messages.length > 0 ? data.messages[0] : 'unknown error'
            dispath(stopSubmit('login', { _error: err }))
        }
    })
}

export const logout = () => dispath => {
    authApi.logout().then(data => {
        if (data.resultCode === 0) {
            dispath(deleteAuthUserData())
        }
    })
}