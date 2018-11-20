import Mock from 'mockjs'
import { param2Obj, getRandomInt } from '@/utils'

const Random = Mock.Random

const List = []
const count = 30

const baseContent = '我是测试数据'
const image_uri = 'http://back.auto888.com.cn/upload/titleimg'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.mock('@guid'),
    'name|1': ['身份证自助取证机', '身份证自助发证机', '身份证自助受理机'],
    model: Mock.mock('@id()'),
    address: Mock.mock('@county(true)'),
    date: Mock.mock('@datetime()'),
    company: Mock.mock('@csentence(5)'),
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

/* ----- getDevice ------ */
const getChildren = function(num) {
  const result = []
  for (let index = 0; index < num; index++) {
    const obj = {
      id: Mock.mock('@guid'),
      name: Mock.mock('@csentence(3, 5)'),
      text: Mock.mock('@cparagraph(1, 3)'),
    }

    result.push(obj)
  }
  
  return result
}

const getChildrenWithTitle = function(num) { 
  const result = []
  for (let index = 0; index < num; index++) {
    const obj = {
      id: Mock.mock('@guid'),
      title: Mock.mock('@csentence(5)'),
      children: getChildren(getRandomInt(3, 5)),
    }

    result.push(obj)
  }

  return result
}

const device = function() {
  return {
    information: {
      name: Mock.mock('@csentence(5)'),
      model: Mock.mock('@id'),
      date: Mock.mock('@date()'),
      company: Mock.mock('@csentence(5)'),
      address: Mock.mock('@county(true)'),
    },
    images: {
      titleList: titleList,
      mainList: mainList,
    },
    parameters: getChildrenWithTitle(getRandomInt(3, 6)),
  }
}

export default {
  getList: config => {
    const { name, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (name && item.title.indexOf(name) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList,
    }
  },
  getDevice: (config) => {
    const { id } = param2Obj(config.url)
    return device()
  },
}