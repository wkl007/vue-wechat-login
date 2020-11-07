import request from '@/utils/request'

export default class CommonServer {
  // 登录接口
  static login (data: { code: string }): Promise<any> {
    return request({
      url: '/wechat/public/',
      method: 'post',
      data: data
    })
  }
}
