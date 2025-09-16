import { getBlogSlugs } from './utils/getBlogSlugs'

export default defineNuxtConfig({
  ssr: true,
  build: {
    transpile: ["gsap"], // Ensure GSAP is transpiled correctly
  },
  
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // ensures old page fades out before new fades in
    },
  },
  modules: [
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    'nuxt-simple-sitemap'
  ],

  css: ['@/assets/sass/main.scss'],

  sitemap: {
    siteUrl: 'https://nuxtlaunchpad.netlify.app',
    trailingSlash: true,
    autoLastmod: true,
    urls: async () => {
      return getBlogSlugs().map(slug => ({ loc: slug }))
    }
  },

//used robots.txt in public



  runtimeConfig: {
    public: {
      schemaOrg: {
        canonicalHost: 'https://nuxtlaunchpad.netlify.app'
      }
    }
  },
  
  
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    preload: true,
    preconnect: true
  },
  image: {
    domains: ['res.cloudinary.com'], // allow remote images
    // Or better: set provider explicitly
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dgdnews6i/image/upload/'
    }
  },

  nitro: {
    preset: 'netlify',
    prerender: {
      routes: getBlogSlugs(),  // 👈 Ensures pages are generated during build
    },
  },
})
