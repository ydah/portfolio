export default {
  target: 'static',
  head: {
    titleTemplate: '%s - ydah',
    title: 'ydah',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  axios: {
    baseURL: '/',
  },
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  build: {},
}
