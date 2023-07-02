<script setup>

</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-[60px] bg-[#111638] h-full shrink-0">
      <div class="flex justify-center items-center pt-4">
        <t-popup placement="right" destroy-on-close trigger="click" overlayClassName="!ml-3" overlayInnerClassName="animate__animated animate__fadeInLeft">
          <t-icon class="cursor-pointer" name="user-circle" size="36px" style="color: white;"/>
          <!-- <div slot="content">触发元素是指触发浮层内容显示的元素</div> -->
          <template #content>
            <div class="">个人中心自定义</div>
          </template>
        </t-popup>
      </div>
    </div>
    <div class="bg-white flex-1 overflow-y-auto">
        <RouterView class="w-full h-full" />
    </div>
  </div>
</template>

