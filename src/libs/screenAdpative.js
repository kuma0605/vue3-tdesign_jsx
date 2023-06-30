function screenAdpative() {
  let docWidth = document.documentElement.clientWidth
  let fontsize = (docWidth / 1920) * 16
  let dpr = window.devicePixelRatio
  // 关于dpr的处理还需要研究
  // 外接显示器的dpr好像始终是1
  // 笔记本的dpr是根据屏幕设置比来的，如果是125%，就是1.25
  let customFontSize = fontsize;
  // 当前字体乘以当前dpr，然后除以目标dpr，可以得到和目标dpr一样的字体
  if(dpr>1.25)customFontSize = customFontSize*dpr/1.25;
  
  if(customFontSize<12)customFontSize=12;
  if(customFontSize>16)customFontSize=16;
  console.log(dpr, fontsize, customFontSize)
  document.documentElement.style.fontSize = customFontSize + 'px'
}

window.onresize = screenAdpative

//优化缩放
screenAdpative()
setTimeout(() => {
  screenAdpative()
}, 0)
