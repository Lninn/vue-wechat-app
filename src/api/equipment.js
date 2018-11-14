import request from '@/utils/request'

export function fetchList() {
    return request({
        url: '/equipment/list',
        method: 'get',
    })
}