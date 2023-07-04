<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

</script>
<template>
    <div class="flex ">
        <div class="w-[230px] shrink-0 bg-white shadow px-4 py-3 h-full overflow-y-auto">
            <div class="text-lg text-font-color mb-4">
                {{ titleMap[whichApp] }}
            </div>
            <div v-if="whichApp=='todo'" class="text-xs text-gray-default font-medium mb-2">
                流程中心
            </div>
            <ul class="mb-4">
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 " :class="{'bg-indigo-100':currentPath=='mytodo'}" @click="goPage('mytodo')">
                    <font-awesome-icon :icon="['fas', 'list-ol']" class="text-indigo-500 w-4 h-4" />
                    <span class="ml-2">我的待办</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 " :class="{'bg-indigo-100':currentPath=='mystart'}" @click="goPage('mystart')">
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
                <template v-if="whichApp!='todo'">
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon :icon="['fas','rectangle-list']" class="text-indigo-500 w-4 h-4" />
                        <span class="ml-2">待处理工单</span>
                    </li>
                </template>
            </ul>
            <template v-if="whichApp=='todo'">
                <div class="text-xs text-gray-default font-medium mb-2">
                    其他待办
                </div>
                <ul >
                    <li class="flex items-center text-sm p-2 rounded cursor-pointer my-1 hover:bg-indigo-100 ">
                        <font-awesome-icon :icon="['fas','rectangle-list']" class="text-indigo-500 w-4 h-4" />
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
        </div>
        <div class="bg-zinc-100 flex-1 overflow-y-auto p-4">
            <RouterView class="w-full h-full" />
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                whichApp:undefined,
                currentPath:undefined,
                titleMap:{
                    'todo':"待办任务"
                }
            }
        },
        created(){
            this.whichApp=this.$route.params.whichApp;
            console.log(this.$router,this.$route)
            this.matchRoute()
        },
        methods:{
            matchRoute(){
                let routeList = this.$route.fullPath.split("/");
                let currentPath = routeList[routeList.length-1];
                this.currentPath=currentPath;
            },
            goPage(subPage){
                this.currentPath=subPage;
                this.$router.push(`/index/layout/${this.whichApp}/${subPage}`)
            }
        }
        
    }
</script>

