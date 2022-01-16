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
        <NuxtLink to="/blog" class="content-link mr-5">Blog</NuxtLink>
        <NuxtLink to="/contact" class="content-link mr-5">Contact</NuxtLink>
        <v-btn icon @click="linkToOtherWindow('https://twitter.com/ydah_')">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
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
        <organisms-card-links />
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

<style lang="scss" scoped>
h2 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}

a.content-link {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
  color: rgb(0 0 0 / 87%);
  text-decoration: none;
}

a.content-link:hover {
  text-decoration: underline;
}

a.card-link {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(0 0 0 / 87%);
  text-decoration: none;
  transition: 0.3s;
}

a.card-link:hover {
  text-decoration: underline;
}

.image-link {
  cursor: pointer;
}
</style>
