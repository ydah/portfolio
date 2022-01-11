<template>
  <v-container>
    <v-row>
      <v-col md="6" sm="12">
        <h2>タカダ ユウダイ (ydah)</h2>
        <v-divider class="my-5" />
        <p class="text-body-2">
          Hi there. I'm Yudai Takada. Born in 1992. Living in Osaka.
        </p>
        <p class="text-body-2">
          I have been developing software for about 6 years.
        </p>
        <p class="text-body-2">
          Currently, I am working as a server-side engineer, mainly using Ruby
          on Rails.
        </p>
        <p class="text-body-2">
          I'm also personal working as a culinary researcher and photographer.
        </p>
      </v-col>
      <v-col md="6" sm="12">
        <v-img src="/lotus.jpg" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
h1.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}
</style>
