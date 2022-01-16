<template>
  <v-footer color="white" padless flat>
    <v-col class="text-center" cols="12">
      <small>
        <v-icon small>mdi-copyright</v-icon>
        {{ new Date().getFullYear() }} — ydah
      </small>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
