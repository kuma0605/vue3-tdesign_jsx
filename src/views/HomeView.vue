<script setup>
  
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
    <div class="p-8 ">
      <div class="flex">
        <ul class="rounded shadow bg-white p-4">
          <!-- 我的待办 -->
          <li>
            <font-awesome-icon icon="fa-solid fa-user-secret" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
