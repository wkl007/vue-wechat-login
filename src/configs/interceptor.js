import Vue from 'vue'
import qs from 'qs'
import router from '@/router'
import store from '@/store'
import CommonServer from '@/api/common'
import wechatAuth from '@/plugins/wechatAuth'

Vue.use(wechatAuth, {
  appid: process.env.VUE_APP_WECHAT_APP_ID
})

router.beforeEach(async (to, from, next) => {
  const { loginStatus } = store.state
  switch (loginStatus) {
    case 0:
      wechatAuth.redirect_uri = processUrl()
      await store.dispatch('setLoginStatus', 1)
      window.location.href = wechatAuth.authUrl
      break
    case 1:
      try {
        wechatAuth.returnFromWechat(to.fullPath)
        await processLogin(wechatAuth.code)
        next()
      } catch (err) {
        await store.dispatch('setLoginStatus', 0)
        next()
      }
      break
    case 2:
      next()
      break
    default:
      break
  }
})

/**
 * 处理url链接
 * @returns {string}
 */
function processUrl () {
  const url = window.location.href
  // 解决多次登录url添加重复的code与state问题
  const urlParams = qs.parse(url.split('?')[1])
  let redirectUrl = url
  if (urlParams.code && urlParams.state) {
    delete urlParams.code
    delete urlParams.state
    const query = qs.stringify(urlParams)
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
 * @returns {Promise<any>}
 */
function processLogin (code) {
  const data = {
    code,
  }
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
