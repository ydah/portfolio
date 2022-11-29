<template>
  <v-app dark>
    <v-main>
      <v-app-bar color="#121212" elevation="0" class="text-center"
        ><v-spacer />
        <nuxt-link :to="'/blog'" class="title">
          <h1 class="page__title">ydah blog.</h1>
        </nuxt-link>
        <v-spacer
      /></v-app-bar>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer color="#121212" elevation="0" absolute app>
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

a.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255 255 255 / 87%);
  text-decoration: none;
  transition: 0.3s;
}
</style>
