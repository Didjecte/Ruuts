// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/FAVICON/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/FAVICON/favicon.svg' },
        { rel: 'shortcut icon', href: '/FAVICON/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/FAVICON/apple-touch-icon.png' },
        { rel: 'manifest', href: '/FAVICON/site.webmanifest' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Ruuts' },
        { name: 'theme-color', content: '#F9F6F0' }
      ]
    }
  }
})