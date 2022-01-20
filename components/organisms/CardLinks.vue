<template>
  <v-container fluid>
    <v-card
      v-for="(content, index) in contents"
      :key="index"
      outlined
      class="mb-3"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <nuxt-link :to="content.link" class="card-link">
            <div class="text-overline mb-4">WORK#0{{ index + 1 }}</div>
            <v-list-item-title class="text-h5 mb-1">{{
              content.title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ content.overview }}</v-list-item-subtitle>
          </nuxt-link>
          <v-list-item-subtitle
            ><atoms-v-chip
              v-for="(tag, i) in content.tags"
              :key="i"
              :label="tag"
          /></v-list-item-subtitle>
        </v-list-item-content>
        <atoms-v-list-item-avatar
          :src="`/work0${index + 1}.jpg`"
          :alt="`work#0${index + 1}`"
        />
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contents: [
      {
        title: 'Recipe books and food essays',
        overview:
          'I publish recipes for dishes that I make in my daily life. I also write essays on the theme of food.',
        tags: ['Recipe', 'Cooking', 'Essays'],
        link: '/work/cook',
      },
      {
        title: 'Gallery of Travel Photography',
        overview:
          'I have been taking photographic works during my travels. I cut out the landscape and leave the memories as a work of art.',
        tags: ['Photography', 'Travel'],
        link: '/work/photo',
      },
    ],
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
