import * as types from './mutationTypes'
import { loginByCode } from '../api/wechatAuth'
import {
  saveToken,
  saveLoginStatus,
  saveUserInfo,
  removeToken,
  removeUserInfo,
} from '../utils/cache'

// 登录相关
export const loginWechatAuth = function ({ commit, state }, query) {
  let data = {
    code: query,
  }
  return new Promise(
    (resolve, reject) => {
      loginByCode(data).then(res => {
        if (res.status === 1) {
          commit(types.SET_USERINFO, saveUserInfo(res.data.userInfo))
          commit(types.SET_TOKEN, saveToken(res.data.accessToken))
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
}

// 设置状态
export const setLoginStatus = function ({ commit, state }, query) {
  if (query === 0 || query === 1) {
    // 上线打开注释，本地调试注释掉
    removeToken()
    removeUserInfo()
  }
  commit(types.SET_LOGIN_STATUS, saveLoginStatus(query))
}

// 保存用户个人信息
export const setUserInfo = function ({ commit, state }, query) {
  commit(types.SET_USERINFO, saveUserInfo(query))
}
