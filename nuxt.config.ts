// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  // devtools: { enabled: true },

  modules: [
    // Simple usage
    // '@nuxtjs/eslint-module', 
    '@nuxtjs/tailwindcss'

  ],
  vue: {
    compilerOptions: {
      //treat all tags with a dash as custom elements
      isCustomElement: (tag) => tag.includes('-'),

    }
  },

})
