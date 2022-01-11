<template>
  <v-container>
    <h1 class="title text-h3 text-center">Cooking</h1>
    <v-divider class="my-5" />
    <v-row>
      <v-col v-for="content in contents" :key="content.id" md="4" sm="12">
        <v-card class="mx-auto" style="height: 100%">
          <v-img :src="content.eyecatch" />
          <v-card-title
            class="note-title"
            @click="linkToOtherWindow(content.noteUrl)"
          >
            {{ content.name }}</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorkCook',
  data() {
    return {
      contents: [],
    }
  },
  async mounted() {
    this.contents = await this.$axios.$get('/.netlify/functions/note')
  },
  methods: {
    linkToOtherWindow(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
<style scoped>
h1.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}

.note-title {
  font-weight: bold;
  cursor: pointer;
}
</style>
