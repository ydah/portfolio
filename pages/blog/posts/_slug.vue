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
h1 {
  line-height: 1.3;
  margin-top: 0.8rem;
}

h2 {
  margin-bottom: 0;
  margin-top: 6rem;
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
