const { VUE_APP_API_URL, VUE_APP_WECHAT_APP_ID } = process.env

export const NODE_ENV: string = process.env.NODE_ENV // 环境变量

export const API_URL: string = VUE_APP_API_URL // 接口url

export const WECHAT_APP_ID: string = VUE_APP_WECHAT_APP_ID // 公众号appId

export const LOGIN_STATUS = 'Login_Status' // 登录态 0 1 2 Number

export const ACCESS_TOKEN = 'Access_Token' // accessToken String

export const USER_INFO = 'USER_INFO' // 用户信息 {} Object
