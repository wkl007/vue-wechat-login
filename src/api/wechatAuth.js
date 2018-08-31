import request from '../utils/request'

/**
 * 登录接口请求token与userinfo
 * @param data
 * 入参  code:"021gj0OV1om5PU0k9VNV1VMQNV1gj0OK"
 * 返回  {
 *          accessToken:'xxx',
 *          refreshToken:'xxx',
 *          userInfo:{}
 *       }
 */
export function loginByCode (data) {
  return request({
    url: '/auth/wechat',
    method: 'post',
    data: data,
  })
}
