import { createSelector } from 'reselect'
export const getUsers = state => state.usersPage.userList
export const getPageSize = state => state.usersPage.pageSize
export const getTotalUsersCount = state => state.usersPage.totalUsersCount
export const getCurrentPage = state => state.usersPage.currentPage
export const isFetching = state => state.usersPage.isFetching
export const folowingInProgress = state => state.usersPage.folowingInProgress

// reselect logic
// const selectSubtotal = createSelector(selectShopItems, items =>
//     items.reduce((subtotal, item) => subtotal + item.value, 0)
//   )