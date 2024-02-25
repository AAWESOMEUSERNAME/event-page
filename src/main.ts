isMobile ? import('./assets/main_mb.css') : import('./assets/main.css')

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { isMobile } from './utils/device'

const app = createApp(App)

app.use(createPinia())
app.use(router)

window.document.documentElement.style.fontSize = isMobile ? '6px' : '10px'

app.mount('#app')
