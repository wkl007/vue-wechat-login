import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'

const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
})

// http请求拦截器
service.interceptors.request.use(config => {
  const { accessToken } = store.getters
  if (accessToken) config.headers.Authorization = `JWT  ${accessToken}`
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 1) {
    return res.data
  } else {
    if (res.errCode === 401 || res.errCode === 403) {
      store.dispatch('setLoginStatus', 0)
      // 重新登录
      window.location.reload()
    } else {
      Toast({
        message: res.errMsg
      })
    }
  }
}, error => {
  return Promise.reject(error)
})

export default service
