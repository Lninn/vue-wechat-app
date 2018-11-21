import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const Random = Mock.Random

const List = []
const count = 20

const baseContent = '我是测试数据'
const image_uri = 'http://back.auto888.com.cn/upload/titleimg'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.mock('@guid'),
    workorderNumber: Mock.mock('@id'),
    deviceNumber: Mock.mock('@id'),
    'state|1': ['INITIALIZED', 'RECEIVED', 'PROCESSING', 'COMPLETED',],
    date: Mock.mock('@datetime()'),
    image: [image_uri + 'f960ca7d-08fc-4.png', ],
  }))
}


/* --- getWorkOrder --- */
const getInformation = function() {
  return {
    date: Mock.mock('@datetime()'),
    number: Mock.mock('@id()'),
  }
}

const getDevice = function() {
  return {
    address: Mock.mock('@county(true)'),
    company: Mock.mock('@cword(3, 5)'),
    model: Mock.mock('@id()'),
    name: Mock.mock('@cword(3, 5)'),
  }
}

const getConnect = function() {
  return {
    name: Mock.mock('@cword(3)'),
    phone: Random.string('number', 11),
  }
}

const getImages = function(num) {
  const data = []
  for (let index = 0; index < num; index++) {
    data.push({
      id: Mock.mock('@id()'),
      path: Random.dataImage('1125x1467', 'Hello Mock.js!'),
    })
  }

  return data
}

export default {
  getList: config => {
    const { title, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getWorkOrder: (config) => {
    const { id } = param2Obj(config.url)
    return {
      information: getInformation(),
      device: getDevice(),
      connection: getConnect(),
      descibe: Mock.mock('@cparagraph()'),
      descibeImage: getImages(3),
      feedback: Mock.mock('@cparagraph()'),
      feedbackImage: getImages(3),
      evaluate: Mock.mock('@csentence'),
    }
  },
}