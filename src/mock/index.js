import Mock from 'mockjs'
import equipmentAPI from './device'
import workorderAPI from './workorder'
import userAPI from './user'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

Mock.setup({
  timeout: '350-600'
})


// 用户相关
Mock.mock(/\/users\/profile/, 'get', userAPI.getProfile)

// 设备相关
Mock.mock(/\/devices\/$/, 'get', equipmentAPI.getList)
Mock.mock(/\/devices\/*/, 'get', equipmentAPI.getDevice)
Mock.mock(/\/maintain\//, 'post', equipmentAPI.maintainDevice)

// 工单相关
Mock.mock(/\/workorders\/$/, 'get', workorderAPI.getList)
Mock.mock(/\/workorders\/*/, 'get', workorderAPI.getWorkOrder)

export default Mock