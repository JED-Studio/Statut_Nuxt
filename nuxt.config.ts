// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400,500,600,700,800,900],
      styles: ['normal', 'italic'],
     
    },
  }
})