import * as types from './mutationTypes'

const mutations = {
  [types.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_LOGIN_STATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  },
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
}

export default mutations
