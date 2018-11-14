import request from '@/utils/request'

export function fetchList() {
    return request({
        url: '/workorder/list',
        method: 'get',
    })
}