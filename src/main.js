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

// iconfont 生态桌面
// https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=15591
import '@/assets/colorful_desktop/iconfont.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faListCheck,faListOl,faCircleArrowUp,faAt,faCubes,faHouseLaptop ,faStar,faUniversalAccess, faSliders} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// 按需加载，全部载入太大了

library.add(faListOl)
library.add(faCircleArrowUp)
library.add(faListCheck)
library.add(faAt)
library.add(faCubes)
library.add(faHouseLaptop)
library.add(faStar)
library.add(faUniversalAccess)
library.add(faSliders)

import {getAxiosInstance} from './httpService'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(TDesign);

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
app.config.globalProperties.$axios = getAxiosInstance(counter)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
