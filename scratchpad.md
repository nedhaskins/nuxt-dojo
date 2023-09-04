// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: false },
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/motion/nuxt'],
  vue: {
    compilerOptions: {
      //treat all tags with a dash as custom elements
      isCustomElement: (tag) => tag.includes('-'),

    }
  },
  app: {
    head: {
      title: 'Nuxt Project Fall 2023',
      meta: {
        charset: 'utf-8',
        name: 'viewport', content: 'width=device-width, initial-scale=1',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    }
  },
  css: ['~/assets/css/globals.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/styles.css" as *;',
        }
      }
    }
  }

})
