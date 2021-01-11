import type { State, UserInfo } from '@/types'
import * as types from './mutationTypes'

const mutations = {
  [types.SET_LOGIN_STATUS] (state: State, loginStatus: number): void {
    state.loginStatus = loginStatus
  },
  [types.SET_ACCESS_TOKEN] (state: State, accessToken: string): void {
    state.accessToken = accessToken
  },
  [types.SET_USER_INFO] (state: State, userInfo: UserInfo): void {
    state.userInfo = userInfo
  }
}

export default mutations
