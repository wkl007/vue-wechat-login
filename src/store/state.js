import { loadStorage, loadCookie, LOGIN_STATUS, ACCESS_TOKEN, USER_INFO } from '../utils/cache'

const state = {
  loginStatus: Number(loadCookie(LOGIN_STATUS, 0)),
  accessToken: loadStorage(ACCESS_TOKEN, ''),
  userInfo: loadStorage(USER_INFO, {}),
}

export default state
