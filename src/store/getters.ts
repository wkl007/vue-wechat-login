import type { State } from '@/store/state'

export const loginStatus = (state: State): number => state.loginStatus

export const accessToken = (state: State): string | undefined => state.accessToken

export const userInfo = (state: State): any => state.userInfo
