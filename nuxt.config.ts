// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  css: [
    "@/assets/css/main.css",
    '@/assets/css/fonts.css'
  ],
  components: [
    {path: '~/components', pathPrefix: false}
  ],
  app: { baseURL: process.env.NUXT_APP_BASE_URL || '/', buildAssetsDir: '/_nuxt/' },
  nitro: { prerender: { crawlLinks: true, routes: ['/'] } },
  runtimeConfig: {
    public: {
      YOUTUBE_URL_CHANNEL: process.env.NUXT_YOUTUBE_URL_CHANNEL
    }
  }
})