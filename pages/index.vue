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
        <v-card outlined class="mb-3">
          <v-list-item three-line>
            <v-list-item-content>
              <NuxtLink to="/work/cook" class="card-link">
                <div class="text-overline mb-4">WORK#01</div>
                <v-list-item-title class="text-h5 mb-1"
                  >Recipe books and food-themed essays</v-list-item-title
                >
                <v-list-item-subtitle
                  >I publish recipes for dishes that I make in my daily life. I
                  also write essays on the theme of food.</v-list-item-subtitle
                >
              </NuxtLink>
              <v-list-item-subtitle
                ><v-chip label outlined class="mr-2">Recipe</v-chip
                ><v-chip label outlined class="mr-2">Cooking</v-chip
                ><v-chip label outlined>Essays</v-chip></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar tile size="160" color="grey">
              <img src="/work01.jpg" alt="work#01" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <NuxtLink to="/work/photo" class="card-link">
                <div class="text-overline mb-4">WORK#02</div>
                <v-list-item-title class="text-h5 mb-1"
                  >Gallery of Travel Photography</v-list-item-title
                >
                <v-list-item-subtitle
                  >I have been taking photographic works during my travels. I
                  cut out the landscape and leave the memories as a work of
                  art.</v-list-item-subtitle
                >
              </NuxtLink>
              <v-list-item-subtitle
                ><v-chip label outlined class="mr-2">Photography</v-chip
                ><v-chip label outlined class="mr-2"
                  >Travel</v-chip
                ></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-avatar tile size="160" color="grey">
              <img src="/work02.jpg" alt="work#02" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
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
