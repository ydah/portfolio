<template>
  <v-container class="pt-10">
    <NuxtContent :document="activities" />
  </v-container>
</template>

<script>
import Prism from '@/plugins/prism'

export default {
  async asyncData({ $content, params }) {
    const activities = await $content('activities', 'list').fetch()
    return { activities }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 500 !important;
}
</style>

<style lang="scss">
a {
  word-break: break-all;
}

h1 {
  line-height: 1.3;
  margin-top: 0.8rem;
  font-size: 2.4rem;
}

h2 {
  margin-bottom: 0.5;
  margin-top: 5rem;
  font-size: 1.8rem;
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

ol,
ul {
  margin-bottom: 3rem;
}

p,
li {
  font-size: 1.2rem;
  line-height: 1.8;
}

img {
  max-width: 700px;
}

iframe {
  max-width: 700px;
}

@media screen and (max-width: 700px) {
  img {
    max-width: 100%;
  }

  iframe {
    max-width: 100%;
  }
}

table {
  margin: 2rem 0;
}

th {
  border-bottom: 1px #dcdcdc solid;
  padding: 0.5rem 1rem;
}

td {
  padding: 0.7rem 1rem;
}

blockquote {
  font-size: 1.4em;
  width: 95%;
  margin: 50px auto;
  font-style: italic;
  padding: 1em 30px 1em 75px;
  border-left: 8px solid #dcdcdc;
  line-height: 1.6;
  position: relative;
  background: #202020;
}

blockquote::before {
  font-family: Arial;
  content: '\201C';
  color: #dcdcdc;
  font-size: 3em;
  position: absolute;
  left: 10px;
  top: -10px;
}

blockquote::after {
  content: '';
}

hr {
  margin: 1rem 0;
}

.footnotes {
  margin-top: 3rem;
}

.container {
  max-width: 900px;
}

.nuxt-content-highlight {
  margin-bottom: 3rem;
}

.token.operator {
  background-color: inherit !important;
}

div.nuxt-content-highlight > pre > code {
  background-color: inherit !important;
}
</style>
