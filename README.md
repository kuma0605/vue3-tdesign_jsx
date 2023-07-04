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

[✅](echarts)[https://echarts.apache.org/handbook/zh/basics/import/]

## 必备概念

### 应用
    易点巡检，分了不同应用模块。
    照理说，不同应用模块就应该是不同的路由路径。
    但是在易点巡检中，设备台账、设备维修 同一个子路由device下。
    设备台账->设备列表：/device/AssetAccount
    设备维修->维修工单：/device/DeviceRepair
    所以在pinia中增加了currentApp，来区分当前选中的app。
    但不建议不同app放在同一个子路由下，新项目建议用不同子路由来区分。

### 所有图标都是按需加载
    使用前需先引入
    fontawesome需先在main.js中引入该图标。
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

### tailwind字体颜色优先级问题
通过 Arbitrary values 解决，text-[#50d71e]
还可通过前置感叹号，如 !text-gray

### download不生效问题
download属性只会在href和你前端的地址是同源(非跨域)才会生效
https://www.cnblogs.com/tseaki/p/13685665.html

### axios formdata请求
方式一：qs.stringify
方式二：new FormData
jquery场景：data: "menuId=" + menuId,要用qs.stringify({menuId})
### 左侧待办2种思路对应右侧两种思路
    1.映射到同一个路由，传递不同参数，获取左侧子导航，再手动路由到右侧子容器
    2.映射到不同路由，页面引入同一个子组件，包括左侧子导航、右侧子容器。
    第二种在路由结构上会比较直观。
    和后端同事沟通后，采用第一种，左侧子导航部分菜单是通用的。
    思考再三还是采用第一种，路由会比较直观。






