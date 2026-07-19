// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image', 'nuxt-swiper'],

  image: {
    sanity: {
      projectId: 'vyyl6ql8',
      dataset: 'production',
    }
  },

  site: {
    url: 'https://theruuts.com',
    name: 'RUUTS'
  },

  sitemap: {
    urls: [
      '/',
      '/about',
      '/experiences',
      '/custom-experiences',
      '/contact',
      '/testimonials'
    ],
    exclude: [
      '/studio-ruuts/**'
    ]
  },

  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/studio-ruuts/']
      },
      {
        userAgent: [
          'PerplexityBot',
          'GPTBot',
          'OAI-SearchBot',
          'Claude-Web',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended'
        ],
        allow: ['/']
      }
    ],
    sitemap: 'https://theruuts.com/sitemap.xml'
  },

  sanity: {
    projectId: 'vyyl6ql8',
    dataset: 'production',
    apiVersion: '2026-07-08',
    useCdn: true,
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/FAVICON/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/FAVICON/favicon.svg' },
        { rel: 'shortcut icon', href: '/FAVICON/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/FAVICON/apple-touch-icon.png' },
        { rel: 'manifest', href: '/FAVICON/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Ruuts' },
        { name: 'theme-color', content: '#F9F6F0' }
      ]
    }
  }
})