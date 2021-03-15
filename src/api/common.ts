import request from '@/utils/request'
import type { LoginReq, LoginResp } from '@/types/api'

export default class CommonServer {
  // 登录接口
  static login (data: LoginReq): Promise<LoginResp> {
    return request.request({
      url: '/wechat/public/',
      method: 'post',
      data
    })
  }
}
