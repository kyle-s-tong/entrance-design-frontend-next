// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  gtm: {
    id: "GTM-XXXXXX",
  },
});
