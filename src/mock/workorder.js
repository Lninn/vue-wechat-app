import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 20

const baseContent = '我是测试数据'
const image_uri = 'http://back.auto888.com.cn/upload/titleimg'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.mock('@guid'),
    name: '工单编号',
    number: '@title(5, 10)',
    'state|1': ['INITIALIZED', 'RECEIVED', 'PROCESSING', 'COMPLETED',],
    date: Mock.mock('@datetime()'),
    describe: baseContent,
    'img|1': [image_uri + 'f960ca7d-08fc-4.png', image_uri + '9aea47db-46c8-4.png'],
  }))
}

export default {
  getList: config => {
    // const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

    // let mockList = List.filter(item => {
    //   if (importance && item.importance !== +importance) return false
    //   if (type && item.type !== type) return false
    //   if (title && item.title.indexOf(title) < 0) return false
    //   return true
    // })

    // if (sort === '-id') {
    //   mockList = mockList.reverse()
    // }

    // const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    // return {
    //   total: mockList.length,
    //   items: pageList
    // }
    return List
  },
  getWorkOrder: (config) => {
    // const { id } = param2Obj(config.url)
    // for (const equip of List) {
    //   if (equip.id === +id) {
    //     return article
    //   }
    // }
    return {}
  },
}