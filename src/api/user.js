import request from '@/utils/request'

export function fetchProfile() {
    return request({
        url: '/users/profile/',
        method: 'GET',
    })
}