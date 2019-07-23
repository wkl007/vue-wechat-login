import Cookies from 'js-cookie'
import storage from 'good-storage'

export const LOGIN_STATUS = 'Login_Status'// 登录态 0 1 2 Number
export const ACCESS_TOKEN = 'Access_Token'// accessToken String
export const USER_INFO = 'User_Info'// 用户信息 {} Object

/**
 * 设置cookie
 * @param key
 * @param value
 * @param options
 * @returns {*}
 */
export function saveCookie (key, value, options) {
  Cookies.set(key, value, options)
  return value
}

/**
 * 获取cookie
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export function loadCookie (key, defaultValue) {
  return Cookies.get(key) || defaultValue
}

/**
 * 删除cookie
 * @param key
 * @returns {string}
 */
export function removeCookie (key) {
  Cookies.remove(key)
  return ''
}

/**
 * 设置本地存储
 * @param key
 * @param value
 * @returns {*}
 */
export function saveStorage (key, value) {
  storage.set(key, value)
  return value
}

/**
 * 获取本地存储
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export function loadStorage (key, defaultValue) {
  return storage.get(key, defaultValue)
}

/**
 * 删除本地存储
 * @param key
 * @returns {string}
 */
export function removeStorage (key) {
  storage.remove(key)
  return ''
}

/**
 * 保存会话存储
 * @param key
 * @param value
 * @returns {*}
 */
export function saveSessionStorage (key, value) {
  storage.session.set(key, value)
  return value
}

/**
 * 获取会话存储
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export function loadSessionStorage (key, defaultValue) {
  return storage.session.get(key, defaultValue)
}

/**
 * 删除会话存储
 * @param key
 * @returns {string}
 */
export function removeSessionStorage (key) {
  storage.session.remove(key)
  return ''
}
