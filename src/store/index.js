import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// 调试工具，开发环境使用，线上关闭
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})

export default store
