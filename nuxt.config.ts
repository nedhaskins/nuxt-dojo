// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  // devtools: { enabled: true },

  modules: [
    // Simple usage
    // '@nuxtjs/eslint-module', 
    '@nuxtjs/tailwindcss'

  ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
      {
        name: 'description', content: 'Everything about Nuxt 3'
      }],
      link: [
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
    //can make a public key-value pair here if you want to make them public
  },
  vue: {
    compilerOptions: {
      //treat all tags with a dash as custom elements
      isCustomElement: (tag) => tag.includes('-'),

    }
  },

})
