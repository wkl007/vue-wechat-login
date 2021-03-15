import type { App } from 'vue'
import vueWechatAuth from '@/plugins/vueWechatAuth'
import { WECHAT_APP_ID } from '@/utils/constants'

/**
 * 微信授权登录插件配置
 * @param app
 */
export function setupWechatAuth (app: App<Element>): void {
  app.use(vueWechatAuth, { appid: WECHAT_APP_ID })
}
