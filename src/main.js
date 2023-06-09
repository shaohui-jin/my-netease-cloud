import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import store from './store'
import router from './router'
import 'element-plus/dist/index.css'
import '@/assets/style/normalize.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { install } from '@/utlis'

createApp(App).use(store).use(router).use(ElementPlus, { locale: zhCn })
  .use(install)
  .mount('#app')

