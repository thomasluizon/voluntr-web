// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', '@nuxt/fonts'],
})
