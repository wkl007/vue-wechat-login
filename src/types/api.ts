import type { UserInfo } from '@/types/index'

export interface LoginReq {
  code: string
}

export interface LoginResp {
  accessToken: string;
  userInfo: UserInfo
}
