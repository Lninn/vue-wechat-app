import request from '@/utils/request'

export function fetchList() {
    return request({
        url: '/devices/',
        method: 'get',
    })
}

export function fetchDevice(id) {
    return request({
        url: '/devices/',
        method: 'GET',
        params: { id, },
    })
}

export function maintainDevice(data) {
    return request({
        url: '/maintain/',
        method: 'POST',
        data,
    })
}