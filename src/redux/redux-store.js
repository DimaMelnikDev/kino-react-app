import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import profileReducer from './profile-reducer'
import dialogReducer from './dialogs-reducer'
import navbarReducer from './navbar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import { appReducer } from './app-reducer'
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(reduxThunk))
export default store