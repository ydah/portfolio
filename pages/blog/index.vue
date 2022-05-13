<template>
  <v-container>
    <v-list two-line>
      <v-list-item v-for="post in posts" :key="post.index">
        <nuxt-link :to="'/blog/posts/' + post.slug" class="card-link">
          <v-list-item-content>
            <div class="text-overline">
              {{ $dateFns.format(new Date(post.published), 'yyyy/MM/dd') }}
            </div>
            <v-list-item-title class="text-h5 mb-1">{{
              post.title
            }}</v-list-item-title>
          </v-list-item-content>
        </nuxt-link>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: 'BlogPosts',
  layout: 'blog',
  async asyncData({ $content }) {
    const posts = await $content('posts').sortBy('published', 'desc').fetch()
    return { posts }
  },
  head: () => ({
    title: 'blog',
  }),
}
</script>

<style lang="scss" scoped>
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
</style>
