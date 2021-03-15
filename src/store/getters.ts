import type { State, UserInfo } from '@/types'

export const loginStatus = (state: State): number => state.loginStatus

export const accessToken = (state: State): string | undefined => state.accessToken

export const userInfo = (state: State): UserInfo => state.userInfo
