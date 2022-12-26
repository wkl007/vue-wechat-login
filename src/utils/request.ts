import axios from 'axios'
import { showToast } from 'vant'
import store from '@/store/index'
import { API_URL } from '@/utils/constants'

const service = axios.create({
  baseURL: API_URL,
  timeout: 5000
})

// http请求拦截器
service.interceptors.request.use(config => {
  const { accessToken } = store.getters
  if (accessToken) {
    // @ts-ignore
    config.headers.Authorization = `JWT  ${accessToken}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// http响应拦截器
service.interceptors.response.use(response => {
  const { status, errCode, data, errMsg } = response.data
  if (status === 1) {
    return data
  } else {
    if (errCode === 401 || errCode === 403) {
      store.dispatch('setLoginStatus', 0)
      window.location.reload()
    } else {
      // TODO错误提示
      showToast({ message: errMsg })
    }
  }
}, err => {
  return Promise.reject(err)
})

export default service
