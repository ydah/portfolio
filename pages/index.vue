<template>
  <v-container class="pt-10">
    <h2>Yudai Takada (ydah)</h2>
    <v-divider class="mt-1 mb-4" />
    <p>
      Yudai Takada is a Rubyist and software engineer. As a software engineer,
      he has experience developing control and embedded applications, web
      backends, and web frontends. Additionally, He is also an experienced Scrum
      Master and has helped introduction of Scrum to teams. He is engaged mainly
      in control and embedded software development at a software development
      company in Osaka 2015-2021. Currently, he works at
      <a href="https://andpad.co.jp/">ANDPAD Inc.</a> to re-architect Rails
      applications and solve cross-cutting technical issues.
    </p>
    <p class="mb-10">→ More information (WIP)</p>
    <h2>Links and Contacts</h2>
    <v-divider class="mt-1 mb-4" />
    <v-row class="mb-10">
      <v-col class="col-6">
        <v-icon>mdi-gmail</v-icon>
        <a href="mailto:t.yudai92@gmail.com">t.yudai92@gmail.com</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-rss</v-icon>
        <a href="https://ydah.net/blog">ydah.net/blog</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-camera</v-icon>
        <a href="https://ydah.net/work/photo">ydah.net/work/photo</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-chef-hat</v-icon>
        <a href="https://ydah.net/work/cook">ydah.net/work/cook</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-github</v-icon>
        <a href="https://github.com/ydah/">github.com/ydah</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-presentation</v-icon>
        <a href="https://speakerdeck.com/ydah">speakerdeck.com/ydah</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-twitter</v-icon>
        <a href="https://twitter.com/ydah_">twitter.com/ydah_</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-mastodon</v-icon>
        <a href="https://ruby.social/@ydah">ruby.social/@ydah</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-cloud-circle</v-icon>
        <a href="https://bsky.app/profile/ydah.bsky.social">ydah.bsky.social</a>
      </v-col>
      <v-col class="col-6">
        <v-icon>mdi-instagram</v-icon>
        <a href="https://instagram.com/ydah__/">instagram.com/ydah__</a>
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
p {
  font-size: 1.1em !important;
  line-height: 1.8em !important;
}

h2 {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}

a {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255 255 255 / 87%) !important;
  text-decoration: underline;
  transition: 0.3s;
}
</style>
