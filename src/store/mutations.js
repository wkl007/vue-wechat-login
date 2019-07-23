import * as types from './mutationTypes'

const mutations = {
  [types.SET_LOGIN_STATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  },
  [types.SET_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken
  },
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default mutations
