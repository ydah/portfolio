<template>
  <article>
    <h1>{{ post.title }}</h1>
    <v-divider />
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
