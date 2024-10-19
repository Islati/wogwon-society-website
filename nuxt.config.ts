// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: {enabled: true},
  compatabilityDate: '2024-10-18',

  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@vueuse/nuxt'
  ],

  nitro: {
      routeRules: {
          "/img/**": {headers: {'cache-control': `public,max-age=${32536000},s-maxage=${32536000}`}},
          "/_nuxt/**": {headers: {'cache-control': `public,max-age=${32536000},s-maxage=${32536000}`}},
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

  app: {
      head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          htmlAttrs: {
              lang: 'en'
          },
          meta: [
              {name: 'description', content: 'Wogwon Society - Promoting Culture'},
              {name: 'keywords', content: 'Wogwon Society, music, arts, culture, community, events, non-profit'},
              // {name: 'Cache-Control', content: 'public, max-age=31536000, immutable'}
          ]
      },
      // pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2024-10-18'
})