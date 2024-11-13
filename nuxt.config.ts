// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  components: [
    '~/components',
    '~/components/ui-kit'      
  ],
  modules: ['@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400,500,600,700,800,900],
      styles: ['normal', 'italic'],
     
    },
  },

  app: {
    baseURL: '/Statut_Nuxt', 
    buildAssetsDir: 'assets', 
  }
  
})