import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShareStore = defineStore('share', () => {
  const currentApp = ref()
  function setApp(nv){
    currentApp.value=nv;
    // 为什么要放这里，因为刷新页面会丢失
    window.localStorage.setItem("currentApp",nv);
  }
  return { currentApp,setApp }
})
