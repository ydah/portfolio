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
p {
  font-size: 1.2rem;
  line-height: 1.8;
}

img {
  max-width: 400px;
}
</style>
