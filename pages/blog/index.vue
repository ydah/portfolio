<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.slug">
        <v-card class="mx-auto" max-width="344" outlined>
          <nuxt-link :to="'/blog/posts/' + post.slug" class="card-link">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  {{ $dateFns.format(new Date(post.published), 'yyyy/MM/dd') }}
                </div>
                <v-list-item-title class="text-h5 mb-1">{{
                  post.title
                }}</v-list-item-title>
                <v-list-item-subtitle>{{
                  post.description
                }}</v-list-item-subtitle>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar tile size="80" color="grey"
                ><img
                  v-if="post.eye_catch"
                  :src="post.eye_catch"
                  alt="eye catch"
              /></v-list-item-avatar>
            </v-list-item>
          </nuxt-link>
        </v-card>
      </v-col>
    </v-row>
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
