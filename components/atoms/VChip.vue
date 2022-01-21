<template>
  <v-chip label outlined class="mr-2">{{ label }}</v-chip>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
  },
}
</script>
