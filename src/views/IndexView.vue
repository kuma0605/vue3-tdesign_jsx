<script setup>
  import { ref, onMounted, onUnmounted,computed } from 'vue'
  import { useRouter, useRoute} from "vue-router"  // 引入userRouter
  const leftTabChosen = ref('workbench');
  const showAppList = ref(false);
  const router = useRouter()
  const route = useRoute()

  function chooseLeftTab(tabChosen){
    leftTabChosen.value=tabChosen;

    goRouter(tabChosen);
  }

  function toggleAppList(){
    showAppList.value=!showAppList.value;
  }

  import { useShareStore } from '@/stores/share'
  const shares = useShareStore()

  function goRouter(tabChosen){
    if(tabChosen==='workbench'){
      shares.setApp(undefined)
    }else{
      shares.setApp(tabChosen)
    }

    if(tabChosen==='todo'){
      router.push("/index/" + 'layout/todo/mytodo');
    }
    if(tabChosen==="workbench"){
      router.push("/index");
    }
  }

  function matchRoute() {
    if(route.fullPath!='/index'){
      leftTabChosen.value='todo'
    }
  }

  setTimeout(()=>{
    matchRoute()
  },0)

  const validTabChosen = computed(() => {
    if(shares.currentApp!=undefined){
      return shares.currentApp;
    }
    
    return leftTabChosen.value;
  })
  
</script>

<template>
  <div class="flex">
    <div class="w-[60px] bg-[#111638] h-full shrink-0 flex flex-col justify-between relative">
      <div>
        <div class="flex justify-center items-center pt-4 mb-8">
          <t-popup placement="right-top" destroy-on-close trigger="click" overlayClassName="!ml-3"
            overlayInnerClassName="animate__animated animate__bounceInLeft bg-white/95 p-0">
            <t-icon class="cursor-pointer text-white" name="user-circle" size="36px" />
            <template #content>
              <div class="w-60">
                <div class="rounded-t-[6px] mb-4">
                  <div class="bg-[#6371b7]/75 h-[60px] rounded-t-[6px] relative">
                    <div class="absolute w-full bottom-[-30px] flex justify-center ">
                      <div
                        class="w-[60px] h-[60px] bg-[#576193] rounded-[60px] border-4 border-white flex justify-center items-center shadow">
                        <t-icon name="user" size="24px" class="text-white"></t-icon>
                      </div>
                    </div>
                  </div>
                  <div class="mt-[30px] border-b border-[#f8f8f8] pb-2">
                    <div class="text-center text-[#5e5873] font-medium text-lg">
                      丁超
                    </div>
                    <div class="text-center text-[#b9b9c3] font-medium text-xs">
                      瀚天智能
                    </div>
                  </div>
                </div>
                <ul class="flex flex-wrap px-4">
                  <li
                    class="flex flex-col items-center cursor-pointer text-[#626262] p-2 rounded hover:bg-blue-400 hover:text-white">
                    <t-icon name="home" size="24px"></t-icon>
                    <div class="mt-2 text-xs">企业管理</div>
                  </li>
                  <li
                    class="flex flex-col items-center cursor-pointer text-[#626262] p-2 rounded hover:bg-blue-400 hover:text-white">
                    <t-icon name="lock-on" size="24px"></t-icon>
                    <div class="mt-2 text-xs">修改密码</div>
                  </li>
                </ul>
                <div class="p-4"><t-button block theme="primary" variant="base">退出登录</t-button></div>
              </div>
            </template>
          </t-popup>
        </div>
        <ul>
          <li
            @click="chooseLeftTab('workbench')"
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded mb-2 hover:bg-zinc-300/36 " :class="{'!text-[#746ced]':validTabChosen=='workbench','!bg-zinc-300':validTabChosen=='workbench','animate__animated animate__flipInX':validTabChosen=='workbench'}">
            <t-icon name="laptop" size="24px"></t-icon>
            <div class="mt-2 text-xs font-bold">工作台</div>
          </li>
          <li
            @click="chooseLeftTab('todo')"
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded mb-2 hover:bg-zinc-300/36" :class="{'!text-[#746ced]':validTabChosen=='todo','!bg-zinc-300':validTabChosen=='todo','animate__animated animate__flipInX':validTabChosen=='todo'}">
            <!-- t-badge 要会阻碍样式传递，要在其身上再加一层样式 -->
            <t-badge count="3" class="text-white" :class="{'!text-[#746ced]':validTabChosen=='todo'}">
              <t-icon name="root-list" size="24px"></t-icon>
            </t-badge>
            <div class="mt-2 text-xs font-bold">待办</div>
          </li>
          <li
            @click="toggleAppList"
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded hover:bg-zinc-300/36" :class="{'!text-[#746ced]':showAppList,'!bg-zinc-300':showAppList,'animate__animated animate__flipInX':showAppList}">
            <t-icon name="app" size="24px"></t-icon>
            <div class="mt-2 text-xs font-bold">应用</div>
          </li>
        </ul>
      </div>
      <div class="mb-2">
        <div class="p-2 flex justify-center">
          <t-tooltip content="系统消息" placement="right" theme="primary">
            <t-badge count="5">
              <t-icon name="notification-filled" size="24px" class="text-gray-200 cursor-pointer hover:text-white"></t-icon>
            </t-badge>
          </t-tooltip>
        </div>
        <div class="p-2 flex justify-center">
          <t-tooltip content="帮助咨询" placement="right" theme="primary">
            <t-icon name="help-circle-filled" size="24px" class="text-gray-200 cursor-pointer hover:text-white"></t-icon>
          </t-tooltip>
        </div>
        <div class="p-2 flex justify-center">
          <t-tooltip content="系统设置" placement="right" theme="primary">
            <t-icon name="setting" size="24px" class="text-gray-200 cursor-pointer hover:text-white"></t-icon>
          </t-tooltip>
        </div>
      </div>
      <div class="absolute w-[230px] h-full shadow left-[60px] top-0 bg-white z-[999] animate__animated animate__fadeInLeftBig p-4" v-show="showAppList">
        <div class="flex items-center justify-between mb-4">
          <span class="text-lg text-font-color">我的应用</span>
          <font-awesome-icon icon="xmark" class="text-lg cursor-pointer text-font-color" @click="toggleAppList" />
        </div>
        <div>
          <ul>
            <li
                  class="flex items-center cursor-pointer text-[#626262] py-2 p-3 rounded hover:bg-indigo-100">
                  <font-awesome-icon :icon="['fas', 'laptop-file']" class="text-indigo-500 text-sm" />
                  <div class="text-sm ml-2">设备台账</div>
                </li>
                <li
                  class="flex items-center cursor-pointer text-[#626262] py-2 px-3 rounded hover:bg-indigo-100">
                  <font-awesome-icon :icon="['fas', 'hammer']" class="text-indigo-500 text-sm" />
                  <div class="text-sm ml-2">设备维修</div>
                </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-white flex-1 overflow-y-auto">
      <RouterView class="w-full h-full" />
    </div>
  </div>
</template>

