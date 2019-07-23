import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/configs/vant'
import '@/configs/wechatTitle'
import '@/configs/filter'
import '@/configs/interceptor'

import '@/assets/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
