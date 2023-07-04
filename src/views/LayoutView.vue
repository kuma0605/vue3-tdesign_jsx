<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

</script>
<template>
    <div class="w-full h-full flex ">
        <div class="w-[230px] shrink-0 bg-white shadow px-4 py-3">
            <div class="text-lg text-font-color mb-4">
                {{ titleMap[whichApp] }}
            </div>
            <ul class="">
                <li class="flex items-center text-sm p-2 rounded cursor-pointer hover:bg-indigo-100 ">
                    <font-awesome-icon :icon="['fas', 'list-ol']" class="text-indigo-500" />
                    <span class="ml-2">我的待办</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer hover:bg-indigo-100 ">
                    <font-awesome-icon :icon="['fas', 'circle-arrow-up']" class="text-indigo-500" />
                    <span class="ml-2">我发起的</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer hover:bg-indigo-100 ">
                    <font-awesome-icon icon="fa-solid fa-list-check" class="text-indigo-500" />
                    <span class="ml-2">我处理的</span>
                </li>
                <li class="flex items-center text-sm p-2 rounded cursor-pointer hover:bg-indigo-100 ">
                    <font-awesome-icon :icon="['fas', 'at']" class="text-indigo-500" />
                    <span class="ml-2">抄送我的</span>
                </li>
            </ul>
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
                titleMap:{
                    'todo':"待办任务"
                }
            }
        },
        created(){
            this.whichApp=this.$route.params.whichApp;
        }
    }
</script>

