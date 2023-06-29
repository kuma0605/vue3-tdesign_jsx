import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './libs/screenAdpative.js'

import TDesign from 'tdesign-vue-next';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

// main.js
import 'virtual:uno.css'

import '@unocss/reset/tailwind-compat.css'

import 'animate.css';

import {getAxiosInstance} from './httpService'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TDesign);

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
app.config.globalProperties.$axios = getAxiosInstance(counter)

app.mount('#app')
