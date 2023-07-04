<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useShareStore } from '@/stores/share'
import { useRoute, useRouter } from "vue-router"  // 引入userRouter
const route = useRoute()
const router = useRouter()
const shares = useShareStore()

const currentApp = ref()
const currentPath = ref();

const titleMap=ref({
                'todo': "待办任务",
                "devicerecord":"设备台账"
            })

currentApp.value = shares.currentApp;

matchRoute();

function matchRoute() {
    let routeList = route.fullPath.split("/");
    let currentPath_tmp = routeList[routeList.length - 1];
    currentPath.value = currentPath_tmp;
}

function goPage(subPage) {
    currentPath.value = subPage;
    router.push(`/index/layout/${currentApp.value}/${subPage}`)
    setTimeout(()=>{
        matchRoute()
    },0)
}

function goTodoUrl(url) {
  shares.setApp("todo")
  router.push(url)
  setTimeout(()=>{
    matchRoute()
  },0)
}

</script>
<template>
    <div class="flex ">
        <div class="w-[230px] shrink-0 bg-white shadow px-4 py-3 h-full overflow-y-auto">
            <div class="text-lg text-font-color mb-4">
                {{ titleMap[currentApp] }}
            </div>
            <div v-if="currentApp == 'todo'" class="text-xs text-gray-default font-medium mb-2">
                流程中心
            </div>
            <ul class="pb-4 border-b border-[#f8f8f8] mb-2">
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                    :class="{ 'bg-indigo-100': currentPath == 'mytodo' }" @click="goTodoUrl('/index/layout/todo/mytodo')">
                    <font-awesome-icon :icon="['fas', 'list-ol']" class="text-indigo-500 w-4 h-4" />
                    <span class="ml-2">我的待办</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                    :class="{ 'bg-indigo-100': currentPath == 'mystart' }" @click="goTodoUrl('/index/layout/todo/mystart')">
                    <font-awesome-icon :icon="['fas', 'circle-arrow-up']" class="text-indigo-500 w-4 h-4" />
                    <span class="ml-2">我发起的</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                    :class="{ 'bg-indigo-100': currentPath == 'myhandle' }"
                    >
                    <font-awesome-icon icon="fa-solid fa-list-check" class="text-indigo-500 w-4 h-4" />
                    <span class="ml-2">我处理的</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                    :class="{ 'bg-indigo-100': currentPath == 'sendtome' }"
                    >
                    <font-awesome-icon :icon="['fas', 'at']" class="text-indigo-500 w-4 h-4" />
                    <span class="ml-2">抄送我的</span>
                </li>
                <template v-if="currentApp != 'todo'">
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                        :class="{ 'bg-indigo-100': currentPath == 'todolist' }">
                        <font-awesome-icon :icon="['fas', 'rectangle-list']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">待处理工单</span>
                    </li>
                </template>
            </ul>
            <template v-if="currentApp == 'todo'">
                <div class="text-xs text-gray-default font-medium mb-2">
                    其他待办
                </div>
                <ul>
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon :icon="['fas', 'rectangle-list']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">待处理工单</span>
                    </li>
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon :icon="['fas', 'circle-check']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">待确认调拨单</span>
                    </li>
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon icon="fa-solid fa-user-check" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">待处理员工申请</span>
                    </li>
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">日程</span>
                    </li>
                </ul>
            </template>
            <template v-if="currentApp == 'devicerecord'">
                <ul>
                    <li 
                        @click="goPage('dashboard')"
                        class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 "
                        :class="{ 'bg-indigo-100': currentPath == 'dashboard' }">
                        <font-awesome-icon :icon="['fas', 'house']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">首页</span>
                    </li>
                    
                </ul>
            </template>
        </div>
        <div class="bg-zinc-100 flex-1 overflow-y-auto p-4">
            <RouterView class="w-full h-full" />
        </div>
    </div>
</template>


