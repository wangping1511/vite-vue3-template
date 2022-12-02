import { createApp } from 'vue'
import App from './App.vue'

import router from './modules/router'
import pinia from './modules/pinia'
import i18n from './modules/i18n'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '~/styles/main.scss'

createApp(App)
  .use(router)
  .use(i18n)
  .use(pinia)
  .mount('#app')
