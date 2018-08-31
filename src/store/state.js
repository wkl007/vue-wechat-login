import { loadLoginStatus, loadToken, loadUserInfo } from '../utils/cache'

const state = {
  loginStatus: loadLoginStatus(),//登录状态
  token: loadToken(),//token
  userInfo: loadUserInfo(),//用户登录信息
}

export default state
