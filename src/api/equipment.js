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