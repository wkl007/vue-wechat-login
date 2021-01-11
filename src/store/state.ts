import type { State, UserInfo } from '@/types'
import { loadCookie, loadStorage } from '@/utils/cache'
import { ACCESS_TOKEN, LOGIN_STATUS, USER_INFO } from '@/utils/constants'

const state: State = {
  loginStatus: Number(loadCookie(LOGIN_STATUS, '0')),
  accessToken: loadStorage(ACCESS_TOKEN, ''),
  userInfo: loadStorage(USER_INFO, { username: '' }) as UserInfo
}

export default state
