import request from '@/utils/request'

const saveToken = function(user) {
    if (user.token) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    return user
}

export function fetchProfile() {
    return request({
        url: '/users/profile/',
        method: 'GET',
    })
}

export function register(user) {
    const data = JSON.stringify(user)

    return request({
        url: '/users/register/',
        method: 'POST',
        data,
    }).then(saveToken)
}

export function login({ username, password, }) {
    const data = JSON.stringify({ username, password, })

    return request({
        url: '/users/login',
        method: 'POST',
        data,
    }).then(saveToken)
}

export function logout() {
    localStorage.removeItem('user')
}