export default {
  data() {
    return {
      meta: {
        title: '',
        type: '',
        url: '',
      },
      base: `https://ydah.netlify.app`,
      ogbase: `https://ydah.netlify.app/blog/posts/`,
    }
  },
  head() {
    const path = this.$route.path

    this.meta.title = this.post.title
    this.meta.type = 'article'
    this.meta.url = this.base + path
    if (this.post.ogimage != null) {
      this.meta.image = this.ogbase + this.post.ogimage
    }

    return {
      title: this.meta.title,
      meta: [
        { hid: 'og:description', property: 'og:description', content: '' },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        { name: 'twitter:title', content: this.meta.title },
        { name: 'twitter:text:title', content: this.meta.title },
      ],
    }
  },
}
