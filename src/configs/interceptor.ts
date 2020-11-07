import { parse, stringify } from 'qs'
import router from '@/router'
import store from '@/store'
import CommonServer from '@/api/common'
import vueWechatAuth from '@/plugins/vueWechatAuth'

router.beforeEach(async (to, from, next) => {
  const { loginStatus } = store.getters
  switch (loginStatus) {
    case 0:
      vueWechatAuth.redirectUri = processUrl()
      await store.dispatch('setLoginStatus', 1)
      window.location.href = vueWechatAuth.authUrl
      break
    case 1:
      try {
        vueWechatAuth.returnFromWechat(to.fullPath)
        await processLogin(vueWechatAuth.code)
        next()
      } catch (err) {
        await store.dispatch('setLoginStatus', 0)
        next()
      }
      break
    case 2:
      next()
      break
  }
})

/**
 * 处理url链接
 */
function processUrl (): string {
  const url = window.location.href
  // 解决多次登录url添加重复的code与state问题
  const params = parse(url.split('?')[1])
  let redirectUrl = url
  if (params.code && params.state) {
    delete params.code
    delete params.state
    const query = stringify(params)
    if (query.length) {
      redirectUrl = `${url.split('?')[0]}?${query}`
    } else {
      redirectUrl = `${url.split('?')[0]}`
    }
  }
  return redirectUrl
}

/**
 * 处理登录
 * @param code
 */
function processLogin (code: string): Promise<any> {
  const data = { code }
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { userInfo, accessToken } = await CommonServer.login(data)
      await store.dispatch('setLoginStatus', 2)
      await store.dispatch('setAccessToken', accessToken)
      await store.dispatch('setUserInfo', userInfo)
      resolve({ status: 1, data: '登录成功' })
    } catch (err) {
      reject(err)
    }
  })
}
