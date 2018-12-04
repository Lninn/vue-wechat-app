import Mock from 'mockjs'
// import { param2Obj, } from '@/utils'

const Random = Mock.Random

let users = JSON.parse(localStorage.getItem('users')) || []

let user = Mock.mock({
  id: Mock.mock('@guid'),
  name: Mock.mock('@csentence(3)'),
  username: Mock.mock('@id()'),
  address: Mock.mock('@county(true)'),
  phone: Random.string('number', 11),
  img: Random.dataImage('400x550', 'My Avator!'),
  organize: Mock.mock('@csentence(5)'),
  lastLogin: Mock.mock('@datetime()'),
  token: 'fake-jwt-token',
})

export default {
  getProfile: () => {
    // const { id } = param2Obj(config.url)
    
    return user
  },
  register: config => {
    let newUser = JSON.parse(config.body);

    // validation
    let duplicateUser = users.filter(user => { return user.username === newUser.username }).length
    if (duplicateUser) {
      return 'Username "' + newUser.username + '" is already taken'        
    }

    // save new user
    newUser.id = Mock.mock('@guid')
    newUser['token'] = 'fake-jwt-token'
    newUser['lastTime'] = new Date(),
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    // respond 200 OK
    return { ok: true, text: JSON.stringify(newUser), }
  },
  login: config => {
    let params = JSON.parse(config.body)
    // find if any user matches login credentials
    let filteredUsers = users.filter(user => {
      return user.username === params.username && user.password === params.password
    })
    if (filteredUsers.length) {
        // if login details are valid return user details and fake jwt token
        let user = filteredUsers[0]
        let responseJson = {
            id: user.id,
            username: user.username,
            type: user.type,
            name: user.name,
            phone: user.phone,
            address: user.address,
            token: 'fake-jwt-token',
            lastTime: new Date(),
        }
        return { ok: true, text: JSON.stringify(responseJson), }
    } else {
        // else return error
        return { ok: false, message: '用户名或者密码错误', }
    }
  },
}