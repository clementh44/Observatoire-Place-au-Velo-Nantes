import config from './config.json';

const TITLE = `Observatoire Vélo de Nantes Métropole - Suivi des ${config.revName.plural} par ${config.assoName}`;
const DESCRIPTION = `Plateforme citoyenne et associative, par ${config.assoName}. État d'avancement, cartes interactives des itinéraires, détails, travaux : suivez le développement du réseau cyclable sécurisé nantais`;
const BASE_URL = 'https://observatoire.louiseveillard.com';
const COVER_IMAGE_URL = '';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: TITLE,
      meta: [
        { hid: 'description', name: 'description', content: DESCRIPTION },
        // facebook
        { property: 'og:site_name', content: TITLE },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: BASE_URL },
        { hid: 'og:title', property: 'og:title', content: TITLE },
        {
          hid: 'og:description',
          property: 'og:description',
          content: DESCRIPTION
        },
        { hid: 'og:image', property: 'og:image', content: COVER_IMAGE_URL },
        { property: 'og:image:width', content: '640' },
        { property: 'og:image:height', content: '476' },
        // twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: BASE_URL },
        { hid: 'twitter:title', name: 'twitter:title', content: TITLE },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: DESCRIPTION
        },
        { name: 'apple-mobile-web-app-title', content: 'Observatoire Place au Vélo' },
        { hid: 'twitter:image', name: 'twitter:image', content: COVER_IMAGE_URL }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        {
          src: 'https://beamanalytics.b-cdn.net/beam.min.js',
          'data-token': process.env.BEAM_ANALYTICS_TOKEN,
          async: true
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      maptilerKey: process.env.MAPTILER_KEY
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/icon', '@nuxt/eslint'],

  content: {
    markdown: {
      tags: { h1: 'h1', h5: 'h5', h6: 'h6' }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'cyclopolis',
        dir: './assets/icons'
      }
    ]
  },

  tailwindcss: { viewer: false },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },

  build: {
    transpile: ['@headlessui/vue']
  },

  compatibilityDate: '2024-08-11'
});
