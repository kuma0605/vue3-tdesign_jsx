// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules:[
      ["login-screen",{'background-image':"url('@/assets/img/login_bg.png')"}],
      ["adjust-full",{'background-size':"100% 100%"}]
  ],
  shortcuts: [
    // ...
  ],
  theme: {
      colors: {
          // ...
          'font-color':'#626262',
          'gray-default':"#999999"
      },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})