import type { CommitStateFunction, UserInfo } from '@/types'
import { ACCESS_TOKEN, LOGIN_STATUS, NODE_ENV, USER_INFO } from '@/utils/constants'
import { removeStorage, saveCookie, saveStorage } from '@/utils/cache'
import * as types from './mutationTypes'

/**
 * 登录态
 * @param commit
 * @param state
 * @param loginStatus
 */
export function setLoginStatus ({
  commit,
  state
}: CommitStateFunction, loginStatus: number): void {
  if ((loginStatus === 0 || loginStatus === 1) && NODE_ENV === 'production') {
    removeStorage(ACCESS_TOKEN)
    removeStorage(USER_INFO)
  }
  commit(types.SET_LOGIN_STATUS, saveCookie(LOGIN_STATUS, String(loginStatus), { expires: 7 }))
}

/**
 * 用户信息
 * @param commit
 * @param state
 * @param userInfo
 */
export function setUserInfo ({
  commit,
  state
}: CommitStateFunction, userInfo: UserInfo): void {
  commit(types.SET_USER_INFO, saveStorage(USER_INFO, userInfo))
}

/**
 * token
 * @param commit
 * @param state
 * @param accessToken
 */
export function setAccessToken ({
  commit,
  state
}: CommitStateFunction, accessToken: string | undefined): void {
  commit(types.SET_ACCESS_TOKEN, saveStorage(ACCESS_TOKEN, accessToken))
}
