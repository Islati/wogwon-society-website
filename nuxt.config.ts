// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [`assets/css/styles.css`],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', "@nuxt/image"],
  nitro: {
    routeRules: {
      "/img/**": { headers: { 'cache-control': `public,max-age=${32536000},s-maxage=${32536000}` } },
      "/_nuxt/**": { headers: { 'cache-control': `public,max-age=${32536000},s-maxage=${32536000}` } },
    },
    publicAssets: [
      {
        baseURL: "video",
        dir: "public/video",
        maxAge: 60 * 60 * 24 * 365,
      },
      {
        baseURL: "images",
        dir: "public/imgs",
        maxAge: 60 * 60 * 24 * 365,
      },
      {
        baseURL: "animations",
        dir: "public/animations",
        maxAge: 60 * 60 * 24 * 365,
      },
    ],
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
          lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Wogwon Society - Promoting Music, Arts, and Culture' },
        { name: 'keywords', content: 'Wogwon Society, music, arts, culture, community events, non-profit' }
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  }
})