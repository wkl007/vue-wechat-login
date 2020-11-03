import request from '@/utils/request'

export default class CommonServer {
  /**
   * 录接口请求token与userInfo
   * @param data
   * 入参  code:"021gj0OV1om5PU0k9VNV1VMQNV1gj0OK"
   * 返回  {
   *          accessToken:'xxx',
   *          refreshToken:'xxx',
   *          userInfo:{}
   *       }
   */
  static login (data?: any): Promise<any> {
    return request({
      url: '/auth/wechat',
      method: 'post',
      data: data
    })
  }
}
