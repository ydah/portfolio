<template>
  <v-app>
    <layouts-header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <layouts-footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
