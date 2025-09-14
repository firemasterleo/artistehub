declare module 'nuxt-simple-sitemap' {
    interface ModuleOptions {
      siteUrl?: string
      trailingSlash?: boolean
      autoLastmod?: boolean
      urls?: () => Promise<Array<{ loc: string }>>
    }
  }
  
  export {}