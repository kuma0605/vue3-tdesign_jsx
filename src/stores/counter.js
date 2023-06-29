import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const httpCount = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function http_increment() {
    httpCount.value++
  }
  function http_decrement() {
    httpCount.value--
  }


  return { count, doubleCount, increment ,httpCount, http_increment,http_decrement}
})
