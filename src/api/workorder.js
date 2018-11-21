import request from '@/utils/request'

export function fetchList() {
    return request({
        url: '/workorders/',
        method: 'GET',
    })
}

export function fetchWorkOrder(id) {
    return request({
        url: '/workorders/',
        method: 'GET',
        params: { id, },
    })
}