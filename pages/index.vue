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
        <v-divider class="my-5" />
        <NuxtLink to="/blog" class="mr-5">Blog</NuxtLink>
        <NuxtLink to="/work/cook" class="mr-5">Cooking</NuxtLink>
        <NuxtLink to="/work/photo" class="mr-5">Photograph</NuxtLink>
        <NuxtLink to="/contact" class="mr-5">Contact</NuxtLink>
        <v-btn
          icon
          @click="linkToOtherWindow('https://www.instagram.com/ydah__/')"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-divider class="my-5" />
        <v-img
          class="image-link"
          src="https://grass-graph.appspot.com/images/ydah.png?background=none"
          @click="linkToOtherWindow('https://github.com/ydah')"
        />
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
  methods: {
    linkToOtherWindow(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
h1.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}

.image-link {
  cursor: pointer;
}
</style>
