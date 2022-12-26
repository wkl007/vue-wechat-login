import type { UserInfo } from '@/types'

export interface LoginReq {
  code: string
}

export interface LoginResp {
  accessToken: string;
  userInfo: UserInfo
}
