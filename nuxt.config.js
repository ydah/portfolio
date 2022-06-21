const baseDir = process.env.BASE_DIR || '/'

export default {
  target: 'static',
  head: {
    titleTemplate: 'Yudai TAKADA/ydah - %s',
    htmlAttrs: { lang: 'ja', prefix: 'og: http://ogp.me/ns#' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'description',
        name: 'description',
        content: 'This page shows the portfolio of software engineer ydah.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'ydah,software,engineer,portfolio',
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Yudai TAKADA/ydah',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://ydah.netlify.app/',
      },
      { hid: 'og:title', property: 'og:title', content: 'Yudai TAKADA/ydah' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'This page shows the portfolio of software engineer ydah.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ydah.netlify.app/ogp.png',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ydah_' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [{ src: '~assets/css/styles.scss' }],
  plugins: ['@/plugins/vee-validate', '@/plugins/prism'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/date-fns',
    '@nuxtjs/google-fonts',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/proxy'],
  axios: { baseURL: '/', retry: true },
  proxy: { '/.netlify/functions/note': { target: 'http://localhost:9000' } },
  router: { base: baseDir },
  generate: { fallback: true },
  telemetry: false,
  content: {},
  vuetify: { customVariables: ['~/assets/variables.scss'] },
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
  googleFonts: {
    families: { 'M PLUS 1p': true },
  },
}
