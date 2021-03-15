import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupVant } from '@/configs/vant'
import { setupWechatAuth } from '@/configs/wechatAuth'
// import '@/configs/interceptor'

const app = createApp(App)

setupRouter(app) // vue-router
setupStore(app) // vuex
setupVant(app) // vant
setupWechatAuth(app) // wechat auth

app.mount('#app')
