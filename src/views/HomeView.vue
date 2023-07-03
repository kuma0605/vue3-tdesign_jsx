<script setup>
  import { SearchIcon, AddIcon } from 'tdesign-icons-vue-next';
</script>

<template>
  <main class="bg-gray-50 relative pt-[60px]">
    <div class="h-[60px] shadow bg-white w-full flex justify-between items-center px-6 absolute left-0 top-0">
      <div class="flex justify-center items-center">
        <svg class="icon w-5 h-5" aria-hidden="true">
          <use xlink:href="#icon-online-conference"></use>
        </svg>
        <span class="text-font-color text-4 font-medium m-2">工作台</span>
      </div>
      <div class="flex justify-center items-center">
        <t-tooltip content="收藏夹" placement="bottom" theme="primary">
          <svg class="icon w-5 h-5 mr-6 cursor-pointer" aria-hidden="true">
            <use xlink:href="#icon-folder"></use>
          </svg>
        </t-tooltip>
        <t-tooltip content="员工门户" placement="bottom" theme="primary">
          <svg class="icon w-5 h-5 mr-6 cursor-pointer" aria-hidden="true">
            <use xlink:href="#icon-group"></use>
          </svg>
        </t-tooltip>
        <t-tooltip content="自定义工作台" placement="bottom-right" theme="primary">
          <svg class="icon w-5 h-5 cursor-pointer" aria-hidden="true">
            <use xlink:href="#icon-draw"></use>
          </svg>
        </t-tooltip>
      </div>
    </div>
    <div class="p-6 ">
      <div class="flex">
        <ul class="rounded shadow bg-white p-4 w-[280px] shrink-0 mr-6">
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
        <div class="flex-1">
          <div class="rounded shadow bg-white p-4 ">
            <div class="flex justify-between items-center">
              <div >
                <span class="font-bold mr-2">我的应用</span>
                <font-awesome-icon :icon="['fas', 'cubes']" class="text-indigo-500 text-sm" />
              </div>
              <div class="flex justify-between items-center">
                <t-input default-value="" size="small" placeholder="输入名称来搜索" class="mr-2">
                  <template #prefix-icon>
                    <SearchIcon />
                  </template>
                </t-input>
                <t-space size="1.5rem">
                  <t-button theme="primary" size="small" >
                    <template #icon>
                      <add-icon />
                    </template>
                    新建应用
                  </t-button>
                </t-space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
