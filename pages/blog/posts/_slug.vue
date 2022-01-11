<template>
  <article>
    <h1>{{ post.title }}</h1>
    <v-divider />
    <NuxtContent :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  },
}
</script>

<style lang="scss" scoped>
article {
  font-family: 'Roboto', 'M PLUS 1p', sans-serif;
}
</style>
