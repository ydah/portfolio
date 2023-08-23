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
          I have been working as a software engineer for about 9 years.
        </p>
        <p class="text-body-2">
          <a href="https://github.com/rubocop/rubocop-rspec" target="_blank">
            RuboCop RSpec
          </a>
          core team member,
          <a href="https://github.com/rubocop/rubocop-capybara" target="_blank">
            RuboCop Capybara
          </a>
          author, Rubyist.
        </p>
        <p class="text-body-2">
          My hobbies are photography and cooking. I also share some photography
          and cooking recipes on this page.
        </p>
        <v-divider class="my-5" />
        <NuxtLink to="/blog" class="content-link mr-5">Blog</NuxtLink>
        <NuxtLink to="/contact" class="content-link mr-5">Contact</NuxtLink>
        <a
          href="https://speakerdeck.com/ydah"
          class="content-link mr-5"
          target="_blank"
        >
          Slide
        </a>
        <v-btn icon @click="linkToOtherWindow('https://twitter.com/ydah_')">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon @click="linkToOtherWindow('https://ruby.social/@ydah')">
          <v-icon>mdi-mastodon</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="
            linkToOtherWindow('https://bsky.app/profile/ydah.bsky.social')
          "
        >
          <v-icon>mdi-cloud-circle</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="linkToOtherWindow('https://www.instagram.com/ydah__/')"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon @click="linkToOtherWindow('https://github.com/ydah/')">
          <v-icon>mdi-github</v-icon>
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
  head: () => ({
    title: 'portfolio site',
  }),
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
  color: rgb(255 255 255 / 87%);
  text-decoration: none;
}

a.content-link:hover {
  text-decoration: underline;
}

a.card-link {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255 255 255 / 87%);
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
