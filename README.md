# 集成
[✅][vue3](https://cn.vuejs.org/guide/introduction.html)

[✅][vue-router](https://router.vuejs.org/zh/guide/)

[✅][pinia](https://pinia.vuejs.org/zh/introduction.html)

[✅]unocss

[✅][tailwindcss](https://www.tailwindcss.cn/docs/installation) 

[✅][tdesign](https://tdesign.tencent.com/vue-next/overview) 

[✅][axios](https://axios-http.com/zh/docs/intro) 封装请求，并结合tdesign实现自动化loading

[✅]eslint

[✅]prettier

[✅][animated.css](https://animate.style/)

[✅]屏幕适配(rem)-以1920px宽度，字体16px为基准

[✅](fontawesome)[https://fontawesome.com/search?o=r&m=free]

## 注意点
### css单位使用px，以1920px宽度设计稿为标准，字体16px为基准
    编译时会转化到rem

### loading已进行全局配置，不需要手动添加
### animated_css 
    animated_css直接放根元素的子元素上，会影响布局，要放在子孙元素上

### 图标采用tdesign自带图标，或者(fontawesome)[https://fontawesome.com/search?o=r&m=free]图标
    fontawesome示例：
    <font-awesome-icon :icon="['fas', 'cubes']" class="text-indigo-500 text-sm" />

### 涉及到背景图片，参考根目录下uno.config.ts
    rules->login-screen

### vue3组合式函数-setup
(文档)[https://cn.vuejs.org/guide/reusability/composables.html#async-state-example]

### 左侧待办2种思路对应右侧两种思路
    1.映射到同一个路由，传递不同参数，获取左侧子导航，再手动路由到右侧子容器
    2.映射到不同路由，页面引入同一个子组件，包括左侧子导航、右侧子容器。
    第二种在路由结构上会比较直观。
    和后端同事沟通后，采用第一种，左侧子导航部分菜单是通用的。






