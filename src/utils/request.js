import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
})

// response interceptor
service.interceptors.response.use(
  response => {
    const data = response.data
    const text = data.text && JSON.parse(data.text)
    
    if (!data.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout()
            location.reload(true)
        }

        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
    }
    return text
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service