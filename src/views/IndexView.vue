<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  const leftTabChosen = ref('workbench');

  function chooseLeftTab(tabChosen){
    leftTabChosen.value=tabChosen;
  }
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-[60px] bg-[#111638] h-full shrink-0 flex flex-col justify-between">
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
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded mb-2 hover:bg-zinc-300/36 " :class="{'!text-[#746ced]':leftTabChosen=='workbench','!bg-zinc-300':leftTabChosen=='workbench','animate__animated animate__flipInX':leftTabChosen=='workbench'}">
            <t-icon name="laptop" size="24px"></t-icon>
            <div class="mt-2 text-xs font-bold">工作台</div>
          </li>
          <li
            @click="chooseLeftTab('todo')"
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded mb-2 hover:bg-zinc-300/36" :class="{'!text-[#746ced]':leftTabChosen=='todo','!bg-zinc-300':leftTabChosen=='todo','animate__animated animate__flipInX':leftTabChosen=='todo'}">
            <!-- t-badge 要会阻碍样式传递，要在其身上再加一层样式 -->
            <t-badge count="3" class="text-white" :class="{'!text-[#746ced]':leftTabChosen=='todo'}">
              <t-icon name="root-list" size="24px"></t-icon>
            </t-badge>
            <div class="mt-2 text-xs font-bold">待办</div>
          </li>
          <li
            @click="chooseLeftTab('app')"
            class="flex flex-col items-center cursor-pointer text-white p-2 rounded hover:bg-zinc-300/36" :class="{'!text-[#746ced]':leftTabChosen=='app','!bg-zinc-300':leftTabChosen=='app','animate__animated animate__flipInX':leftTabChosen=='app'}">
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
    </div>
    <div class="bg-white flex-1 overflow-y-auto">
      <RouterView class="w-full h-full" />
    </div>
  </div>
</template>

