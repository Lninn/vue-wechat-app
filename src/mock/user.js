import Mock from 'mockjs'
import { param2Obj, } from '@/utils'

const Random = Mock.Random

export default {
  getProfile: config => {
    const { id } = param2Obj(config.url)
    
    return Mock.mock({
      id: Mock.mock('@guid'),
      name: Mock.mock('@csentence(3)'),
      username: Mock.mock('@id()'),
      address: Mock.mock('@county(true)'),
      phone: Random.string('number', 11),
      img: Random.dataImage('400x550', 'My Avator!'),
      organize: Mock.mock('@csentence(5)'),
      lastLogin: Mock.mock('@datetime()'),
    })
  },
}