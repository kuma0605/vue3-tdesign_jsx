<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

</script>

<template>
  <RouterView class="w-full h-full" />
  <t-loading :loading="counter.httpCount>0" text="加载中..." fullscreen />
</template>

