import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const Random = Mock.Random

const List = []
const count = 10

const baseContent = '我是测试数据'
const image_uri = 'http://back.auto888.com.cn/upload/titleimg'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.mock('@guid'),
    'name|1': ['身份证自助取证机', '身份证自助发证机', '身份证自助受理机'],
    model: '@title(5, 10)',
    address: Mock.mock('@county(true)'),
    date: Mock.mock('@datetime()'),
    describe: baseContent,
    'img|1': [image_uri + 'f960ca7d-08fc-4.png', image_uri + '9aea47db-46c8-4.png'],
  }))
}


const titleList = []
for (let index = 0; index < 3; index++) {
  titleList.push({ id: Mock.mock('@guid'), path: Random.dataImage('750x860', 'Hello Mock.js!'), })
}

const mainList = []
for (let index = 0; index < 3; index++) {
  mainList.push({ id: Mock.mock('@guid'), path: Random.dataImage('1125x1467', 'Hello Mock.js!'), })
}

const data = {
  img: {
    title_list: titleList,
    main_list: mainList,
  },
  parameters: [],
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
  getDevice: (config) => {
    const { id } = param2Obj(config.url)
    for (const device of List) {
      if (device.id === +id) {
        return device
      }
    }
  },
}