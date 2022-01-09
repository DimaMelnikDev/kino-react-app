import { authMe } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

// action
const initializedSuccess = () => ({ type: 'SET_INITIALIZED' })

// thunk
export const initializedApp = () => dispath => {
    const authMeResp = dispath(authMe())
    Promise.all([authMeResp]).then(() => {
        dispath(initializedSuccess())
    })
}