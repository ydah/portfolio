<template>
  <v-list-item-avatar tile size="160" color="grey" class="d-none d-lg-flex">
    <img :src="src" :alt="alt" />
  </v-list-item-avatar>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    alt: { type: String, default: '' },
  },
}
</script>
