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
  vue: {
    compilerOptions: {
      //treat all tags with a dash as custom elements
      isCustomElement: (tag) => tag.includes('-'),

    }
  },

})
