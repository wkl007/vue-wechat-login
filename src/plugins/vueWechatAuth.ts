import qs from 'qs'

// 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
const SCOPES: Array<string> = ['snsapi_base', 'snsapi_userinfo']

class VueWechatAuth {
  private appid: string
  private scope: string
  private _code: string
  private _redirectUrl: string

  constructor () {
    this.appid = ''
    this.scope = SCOPES[1]
    this._code = ''
    this._redirectUrl = ''
  }

  install (Vue: any, options: { appid: string }) {
    this.setAppId(options.appid)
    Vue.mixin({
      created () {
        this.$wechatAuth = this
      }
    })
  }

  static makeState (): string {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  }

  setAppId (appid: string) {
    this.appid = appid
  }

  set redirectUri (redirectUri: string) {
    this._redirectUrl = encodeURIComponent(redirectUri)
  }

  get redirectUri () {
    return this._redirectUrl
  }

  set state (state: string) {
    localStorage.setItem('wechat_auth:state', state)
  }

  get state (): string {
    return localStorage.getItem('wechat_auth:state') || ''
  }

  get authUrl () {
    // eslint-disable-next-line no-throw-literal
    if (!this.appid) throw 'appid must not be empty'
    // eslint-disable-next-line no-throw-literal
    if (!this.redirectUri) throw 'redirect uri must not be empty'
    this.state = VueWechatAuth.makeState()
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scope}&state=${this.state}#wechat_redirect`
  }

  get code () {
    // eslint-disable-next-line no-throw-literal
    if (!this._code) throw 'Not get the code from wechat server!'
    const code = this._code
    this._code = ''
    return code
  }

  returnFromWechat (redirectUrl: string) {
    const parseUrl = qs.parse(redirectUrl.split('?')[1])
    if (import.meta.env.MODE === 'development') {
      this.state = ''
      this._code = String(parseUrl.code)
    } else {
      // eslint-disable-next-line no-throw-literal
      if (!this.state) throw 'You did\'t set state'
      if (parseUrl.state === this.state) {
        this._code = String(parseUrl.code)
      } else {
        // eslint-disable-next-line no-throw-literal,no-template-curly-in-string
        throw `Wrong state: ${parseUrl.state}`
      }
      this.state = ''
    }
  }
}

const vueWechatAuth = new VueWechatAuth()

/* if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWechatAuthPlugin)
} */

export default vueWechatAuth
