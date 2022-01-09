import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b43c6a33-855c-48c4-87a8-cc6282ad390d'
    }
})

export const userApi = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance
            .get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        // console.warn(
        //     'Attention this method is deprecated use profileApi.getProfile!!!'
        // )
        return profileApi.getProfile(userId)
    }
}

export const authApi = {
    authMe() {
        return instance.get('auth/me').then(response => response.data)
    },
    login({ email, password, rememberMe }) {
        return instance
            .post('/auth/login', { email, password, rememberMe })
            .then(response => response.data)
    },
    logout() {
        return instance.delete('/auth/login').then(response => response.data)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, { status: status })
            .then(response => response.data)
    }
}