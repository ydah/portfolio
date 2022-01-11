<template>
  <div>
    <v-app-bar color="white" flat>
      <v-toolbar-title v-if="$route.path !== '/'" class="d-none d-md-flex">
        <NuxtLink to="/" class="links"> CAMÉLÉON VIVANT EN MOSAIQUE </NuxtLink>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        class="d-flex d-md-none d-lg-none"
        @click.stop="drawer = !drawer"
      />
      <v-card flat class="d-none d-md-flex align-center">
        <NuxtLink to="/about" class="mr-5"> About </NuxtLink>
        <v-menu transition="slide-y-transition" bottom open-on-hover offset-y>
          <template #activator="{ on, attrs }">
            <div v-bind="attrs" class="mr-5" v-on="on">Work</div>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <NuxtLink to="/contact" class="mr-5"> Contact </NuxtLink>
        <v-btn icon @click="openWIndow('https://www.instagram.com/ydah__/')">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon @click="openWIndow('https://github.com/ydah')">
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-card>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/" class="links"> Home</NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>
              <NuxtLink :to="item.link"> Work: {{ item.title }} </NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/contact" class="mr-5"> Contact </NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              @click="openWIndow('https://www.instagram.com/ydah__/')"
            >
              <v-icon>mdi-instagram</v-icon> Instagram
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="openWIndow('https://github.com/ydah')">
              <v-icon>mdi-github</v-icon> Github
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'ComponentsLayoutsHeader',
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: 'Tech', link: '/work/tech' },
      { title: 'Photo', link: '/work/photo' },
      { title: 'Cooking', link: '/work/cook' },
    ],
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    openWIndow(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
a {
  color: rgb(0 0 0 / 87%) !important;
  text-decoration: none !important;
}

a:focus,
a:hover {
  color: rgb(0 0 0 / 100%) !important;
  text-decoration: none !important;
}
</style>
