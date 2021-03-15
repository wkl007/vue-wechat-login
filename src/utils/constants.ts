const { VITE_APP_API_URL, VITE_APP_WECHAT_APP_ID, VITE_APP_WEB_URL, MODE } = import.meta.env

export const NODE_ENV: string = MODE // 环境变量

export const WEB_URL = VITE_APP_WEB_URL as string // 网页url

export const API_URL = VITE_APP_API_URL as string// 接口url

export const WECHAT_APP_ID = VITE_APP_WECHAT_APP_ID as string // 公众号appId

export const LOGIN_STATUS = 'Login_Status' // 登录态 0 1 2 Number

export const ACCESS_TOKEN = 'Access_Token' // accessToken String

export const USER_INFO = 'USER_INFO' // 用户信息 {} Object
