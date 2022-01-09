import { userApi } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS'

const initialState = {
    userList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    folowingInProgress: []
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                userList: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                userList: state.userList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                userList: state.userList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false }
                    }
                    return user
                })
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IN_FOLLOWING_PROGRESS:
            return {
                ...state,
                folowingInProgress: action.isFetching ?
                    [...state.folowingInProgress, action.id] :
                    [state.folowingInProgress.filter(id => id !== action.id)]
            }
        default:
            return state
    }
}
export default UsersReducer

// action creators
export const follow = userId => ({ type: FOLLOW, userId })
export const unfollow = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setTotalUsersCount = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const setCurrentPage = currentPageNumber => ({
    type: SET_CURRENT_PAGE,
    currentPageNumber
})
export const toggleIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching, id) => ({
    type: TOGGLE_IN_FOLLOWING_PROGRESS,
    isFetching,
    id
})

// thunks
export const unfollowThunk = userId => dispath => {
    dispath(toggleFollowingProgress(true, userId))
    userApi.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispath(unfollow(userId))
        }
        dispath(toggleFollowingProgress(false, userId))
    })
}
export const followThunk = userId => dispath => {
    dispath(toggleFollowingProgress(true, userId))
    userApi.follow(userId).then(data => {
        if (data.resultCode === 0) {
            dispath(follow(userId))
        }
        dispath(toggleFollowingProgress(false, userId))
    })
}
export const getUsersThunk = (pageSize, currentPage) => dispath => {
    dispath(toggleIsFetching(true))
    userApi.getUsers(pageSize, currentPage).then(data => {
        dispath(toggleIsFetching(false))
        dispath(setUsers(data.items))
        dispath(setTotalUsersCount(data.totalCount))
    })
}