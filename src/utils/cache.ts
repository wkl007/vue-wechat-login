import Cookies, { CookieAttributes } from 'js-cookie'
import storage from 'good-storage'

/**
 * 设置cookie
 * @param key
 * @param value
 * @param options
 */
export function saveCookie<T> (key: string, value: string, options: CookieAttributes): string {
  Cookies.set(key, value, options)
  return value
}

/**
 * 获取cookie
 * @param key
 * @param defaultValue
 */
export function loadCookie (key: string, defaultValue: string): string {
  return Cookies.get(key) || defaultValue
}

/**
 * 删除cookie
 * @param key
 */
export function removeCookie (key: string): void {
  Cookies.remove(key)
}

/**
 * 设置本地存储
 * @param key
 * @param value
 */
export function saveStorage<T> (key: string, value?: T): T | undefined {
  storage.set(key, value)
  return value
}

/**
 * 获取本地存储
 * @param key
 * @param defaultValue
 */
export function loadStorage<T> (key: string, defaultValue?: T): T | undefined {
  return storage.get(key, defaultValue)
}

/**
 * 删除本地存储
 * @param key
 */
export function removeStorage (key: string): void {
  storage.remove(key)
}

/**
 * 保存会话存储
 * @param key
 * @param value
 */
export function saveSessionStorage<T> (key: string, value?: T): T | undefined {
  storage.session.set(key, value)
  return value
}

/**
 * 获取会话存储
 * @param key
 * @param defaultValue
 */
export function loadSessionStorage<T> (key: string, defaultValue?: T): T | undefined {
  return storage.session.get(key, defaultValue)
}

/**
 * 删除会话存储
 * @param key
 */
export function removeSessionStorage (key: string): void {
  storage.session.remove(key)
}
