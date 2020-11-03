import axios from 'axios'
import store from '@/store'
import { API_URL } from '@/utils/constants'

const service = axios.create({
  baseURL: API_URL,
  timeout: 5000
})

// http请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// http响应拦截器
service.interceptors.response.use(response => {
  const { status, errCode, data } = response.data
  if (status === 1) {
    return data
  } else {
    if (errCode === 401 || errCode === 403) {
      window.location.reload()
    } else {
      // TODO错误提示
    }
  }
}, err => {
  return Promise.reject(err)
})

export default service
