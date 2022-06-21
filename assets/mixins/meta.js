export default {
  data() {
    return {
      meta: {
        title: '',
        type: '',
        url: '',
      },
      base: 'https://ydah.netlify.app/blog',
    }
  },
  head() {
    const path = this.$route.path

    this.meta.title = this.post.title
    this.meta.type = 'article'
    this.meta.url = this.base + path

    return {
      title: this.meta.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { name: 'twitter:title', content: this.meta.title },
        { name: 'twitter:text:title', content: this.meta.title },
      ],
    }
  },
}
