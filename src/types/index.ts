import { Commit } from 'vuex'

export interface UserInfo {
  username: string
}

export interface State {
  loginStatus: number,
  accessToken: string | undefined,
  userInfo: UserInfo
}

export interface CommitFunction {
  commit: Commit
}

export interface CommitStateFunction extends CommitFunction {
  state: State
}
