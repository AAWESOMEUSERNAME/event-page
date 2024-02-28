import './assets/main_mb.css'
import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { isMobile } from './utils/device'

const app = createApp(App)

app.use(createPinia())
app.use(router)

window.document.documentElement.style.fontSize = isMobile ? '6px' : '10px'
window.document.body.setAttribute('class', isMobile ? 'mb' : '')

app.mount('#app')
