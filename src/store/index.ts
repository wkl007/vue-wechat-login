import type { App } from 'vue'
import { createStore, createLogger } from 'vuex'
import { NODE_ENV } from '@/utils/constants'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

// 调试工具，开发环境使用，线上关闭
const debug = NODE_ENV !== 'production'

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})

/**
 * vuex 配置
 * @param app
 */
export function setupStore (app: App<Element>): void {
  app.use(store)
}

export default store
