<script setup lang="jsx">
import { SearchIcon, AddIcon } from 'tdesign-icons-vue-next';
import { useRouter } from "vue-router"  // 引入userRouter
const router = useRouter()
const renderPrefixIcon = () => <AddIcon />;

import { useShareStore } from '@/stores/share'
const shares = useShareStore()

function addCollect() {

}

function goApp(appChosen) {
  // console.log(appChosen)
  shares.setApp(appChosen)
  let targetUrl;
  if(appChosen=='devicerecord'){
    targetUrl= "/index/layout/devicerecord/dashboard"
  }
  // console.log(targetUrl)
  router.push(targetUrl);
}

function goTodoUrl(url) {
  shares.setApp("todo")
  router.push(url)
}
</script>

<template>
  <main class="bg-zinc-100 relative pt-[60px]">
    <div class="h-[60px] shadow bg-white w-full flex justify-between items-center px-6 absolute left-0 top-0">
      <div class="flex justify-center items-center">
        <font-awesome-icon :icon="['fas', 'house-laptop']" class="text-indigo-500 text-4" />
        <span class="text-font-color text-4 font-bold m-2">工作台</span>
      </div>
      <div class="flex justify-center items-center">
        <t-tooltip content="收藏夹" placement="bottom" theme="primary">
          <font-awesome-icon :icon="['fas', 'star']" class="icon w-5 h-5 mr-6 cursor-pointer text-indigo-500" />
        </t-tooltip>
        <t-tooltip content="员工门户" placement="bottom" theme="primary">
          <font-awesome-icon :icon="['fas', 'universal-access']"
            class="icon w-5 h-5 mr-6 cursor-pointer text-indigo-500" />
        </t-tooltip>
        <t-tooltip content="自定义工作台" placement="bottom-right" theme="primary">
          <font-awesome-icon :icon="['fas', 'sliders']" class="icon w-5 h-5 cursor-pointer text-indigo-500" />
        </t-tooltip>
      </div>
    </div>
    <div class="p-6 ">
      <div class="flex">
        <ul class="rounded shadow bg-white p-4 w-[280px] shrink-0 mr-6">
          <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
            @click="goTodoUrl('/index/layout/todo/mytodo')">
            <font-awesome-icon :icon="['fas', 'list-ol']" class="text-indigo-500 w-4 h-4" />
            <span class="ml-2">我的待办</span>
          </li>
          <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
            @click="goTodoUrl('/index/layout/todo/mystart')">
            <font-awesome-icon :icon="['fas', 'circle-arrow-up']" class="text-indigo-500 w-4 h-4" />
            <span class="ml-2">我发起的</span>
          </li>
          <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
            <font-awesome-icon icon="fa-solid fa-list-check" class="text-indigo-500 w-4 h-4" />
            <span class="ml-2">我处理的</span>
          </li>
          <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
            <font-awesome-icon :icon="['fas', 'at']" class="text-indigo-500 w-4 h-4" />
            <span class="ml-2">抄送我的</span>
          </li>
        </ul>
        <div class="flex-1">
          <div class="rounded shadow bg-white p-4 mb-4">
            <div class="flex justify-between items-center">
              <div>
                <span class="font-medium mr-2">我的应用</span>
                <font-awesome-icon :icon="['fas', 'cubes']" class="text-indigo-500 text-sm" />
              </div>
              <div class="flex justify-between items-center">
                <t-space>
                  <t-input default-value="" size="small" placeholder="输入名称来搜索">
                    <template #prefix-icon>
                      <SearchIcon />
                    </template>
                  </t-input>
                  <!-- 图标按钮需要放在 t-space中，不然图标不显示 -->
                  <t-button theme="primary" size="small">
                    <template #icon>
                      <add-icon />
                    </template>
                    新建应用
                  </t-button>
                </t-space>
              </div>
            </div>
            <div class="py-4">
              <!-- 应用列表 -->
              <ul class="flex flex-wrap">
                <li
                  @click="goApp('devicerecord')"
                  class="flex flex-col items-center cursor-pointer text-[#626262] p-6 rounded hover:shadow hover:animate-pulse">
                  <font-awesome-icon :icon="['fas', 'laptop-file']" class="text-indigo-500 text-2xl" />
                  <div class="mt-4 text-base">设备台账</div>
                </li>
                <li
                  class="flex flex-col items-center cursor-pointer text-[#626262] p-6 rounded hover:shadow hover:animate-pulse">
                  <font-awesome-icon :icon="['fas', 'hammer']" class="text-indigo-500 text-2xl" />
                  <div class="mt-4 text-base">设备维修</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="rounded shadow bg-white p-4 ">
            <div class="flex items-center">
              <span class="font-medium mr-2">我的收藏</span>
              <t-link size="small" theme="default" :prefix-icon="renderPrefixIcon" :on-click="addCollect">添加</t-link>
            </div>
            <div class="flex justify-center items-center text-3 py-4">
              <span class="mr-2">暂无收藏</span><t-link theme="primary" underline size="small">添加</t-link>
            </div>
          </div>

        </div>
      </div>
    </div>
</main></template>
