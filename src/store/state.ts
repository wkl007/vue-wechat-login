import { loadStorage, loadCookie } from '@/utils/cache'
import { LOGIN_STATUS, ACCESS_TOKEN, USER_INFO } from '@/utils/constants'

export interface State {
  loginStatus: number,
  accessToken: string | undefined,
  userInfo: any
}

const state: State = {
  loginStatus: Number(loadCookie(LOGIN_STATUS, '0')),
  accessToken: loadStorage(ACCESS_TOKEN, ''),
  userInfo: loadStorage(USER_INFO, {})
}

export default state
