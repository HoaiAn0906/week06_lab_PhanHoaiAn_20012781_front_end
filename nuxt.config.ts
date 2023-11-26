// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.BASE_API_URL,
    },
  },
  build: {
    //   extractCSS: false,
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth'],
  plugins: ['@/plugins/axios', '@/plugins/api'],
  auth: {
    origin: process.env.ORIGIN,
    basePath: '/api/v1/auth',
    globalAppMiddleware: true,
  },
  app: {
    head: {
      title: 'AdminPro Nuxt 3 - Vuetify 3 - vite - Typescript Based Admin Dashboard Template',
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
})
