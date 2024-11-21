// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/fonts/stylesheet.css'
  ],
  components: [
    '~/components',
    '~/components/ui-kit',    
    '~/components/header',      
    '~/components/footer',      
    '~/components/form',      
    '~/components/slider',      
    '~/components/button',  
    '~/components/blockStocks',    
    '~/components/blockNews',    
    '~/components/products',

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
  },

  
})