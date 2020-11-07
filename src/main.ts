import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupVant } from '@/configs/vant'
import '@/configs/registerServiceWorker'

const app = createApp(App)

setupRouter(app) // vue-router
setupStore(app) // vuex
setupVant(app) // vant

app.mount('#app')
