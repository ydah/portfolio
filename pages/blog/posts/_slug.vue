<template>
  <article>
    <h1>{{ post.title }}</h1>
    <v-divider />
    <NuxtContent :document="post" />
  </article>
</template>

<script>
import Prism from '@/plugins/prism'

export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  },
  head: () => ({
    title: 'blog',
  }),
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
article {
  font-family: 'Roboto', 'M PLUS 1p', sans-serif;
}
</style>

<style lang="scss">
img {
  max-width: 400px;
}
</style>
