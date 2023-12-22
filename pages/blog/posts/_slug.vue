<template>
  <article>
    <h1>{{ post.title }}</h1>
    <v-divider class="mb-2" />
    <a
      href="https://b.hatena.ne.jp/entry/"
      class="hatena-bookmark-button"
      data-hatena-bookmark-layout="basic-label"
      data-hatena-bookmark-lang="ja"
      title="このエントリーをはてなブックマークに追加"
      ><img
        src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
        alt="このエントリーをはてなブックマークに追加"
        width="20"
        height="20"
        style="border: none"
    /></a>
    <script
      type="text/javascript"
      src="https://b.st-hatena.com/js/bookmark_button.js"
      charset="utf-8"
      async="async"
    ></script>
    <NuxtContent :document="post" />
  </article>
</template>

<script>
import Prism from '@/plugins/prism'
import Meta from '~/assets/mixins/meta'

export default {
  mixins: [Meta],
  layout: 'blog',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
article {
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
}

h2 {
  margin-bottom: 0.5;
  margin-top: 5rem;
}

h3 {
  margin-top: 3rem;
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
