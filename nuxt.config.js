export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Per-Annum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
'~/assets/style/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/composition-api/module'
  ],
  purgeCSS: {
    // your settings here
  mode: 'webpack',
  // enabled: ({ isDev, isClient }) => (isDev && isClient), // or `false` when in dev/debug mode
  enabled:true,
  paths: [
    'components/*.vue',
   // 'layouts/**/*.vue',
    'pages/*.vue',
    // 'plugins/**/*.js',
    'assets/**/*.css'
  ],
  css: ['assets/style/style.css'],
  styleExtensions: ['.css'],
  // whitelist: ['body', 'html', 'nuxt-progress'],
  extractors: [
    {
      extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
      extensions: ['html', 'vue', 'js']
    }
  ]
   },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'portal-vue/nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json'
          },
          {
            code: 'hi',
            file: 'hi.json'
          }
        ],
        lazy: true,
        langDir: 'locales/',
        strategy: 'no_prefix',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
          // onlyOnRoot: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    analyze: true
  }
}
