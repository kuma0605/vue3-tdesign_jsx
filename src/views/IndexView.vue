<script setup>
  import { IconFont } from 'tdesign-icons-vue-next';
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-[60px] bg-[#111638] h-full shrink-0">
      <div class="flex justify-center items-center pt-4">
        <t-popup placement="right-top" destroy-on-close trigger="click" overlayClassName="!ml-3" overlayInnerClassName="animate__animated animate__bounceInLeft bg-white/95 p-0">
          <t-icon class="cursor-pointer text-white" name="user-circle" size="36px" />
          <template #content>
            <div class="w-60">
              <div class="rounded-t-[6px] mb-4">
                <div class="bg-[#6371b7]/75 h-[60px] rounded-t-[6px] relative">
                  <div class="absolute w-full bottom-[-30px] flex justify-center ">
                    <div class="w-[60px] h-[60px] bg-[#576193] rounded-[60px] border-4 border-white flex justify-center items-center shadow">
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
                <li class="flex flex-col items-center cursor-pointer text-[#626262] p-2 rounded hover:bg-blue-400 hover:text-white">
                  <t-icon name="home" size="24px"></t-icon>
                  <div class="mt-2 text-xs">企业管理</div>
                </li>
                <li class="flex flex-col items-center cursor-pointer text-[#626262] p-2 rounded hover:bg-blue-400 hover:text-white">
                  <t-icon name="lock-on" size="24px"></t-icon>
                  <div class="mt-2 text-xs">修改密码</div>
                </li>
              </ul>
              <div class="p-4"><t-button block theme="primary" variant="base">退出登录</t-button></div>
            </div>
          </template>
        </t-popup>
      </div>
    </div>
    <div class="bg-white flex-1 overflow-y-auto">
        <RouterView class="w-full h-full" />
    </div>
  </div>
</template>

