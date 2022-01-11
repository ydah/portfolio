<template>
  <v-app dark>
    <v-main>
      <v-app-bar color="white" elevation="0" class="text-center"
        ><v-spacer />
        <h1 class="page__title">ydah blog.</h1>
        <v-spacer
      /></v-app-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer color="white" elevation="0" absolute app>
      <v-spacer />
      <span class="footer__text"
        >Copyright &copy; {{ new Date().getFullYear() }} - ydah</span
      >
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'BlogLayout',
  data() {
    return {
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss" scoped>
h1.page__title,
.footer__text {
  font-family: 'AntroVectra';
  font-weight: 300;
}
</style>
