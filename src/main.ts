import { createApp } from 'vue'
import App from '@/App.vue'
import { setupVant } from '@/configs/vant'

const app = createApp(App)

setupVant(app) // vant

app.mount('#app')
