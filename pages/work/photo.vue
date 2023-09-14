<template>
  <v-container>
    <h1 class="title text-h3 text-center">Photograph</h1>
    <v-divider class="my-5" />
    <v-row>
      <v-col v-for="photo in photos" :key="photo.src" md="4" sm="12">
        <div class="hover-effect">
          <v-card class="bg-dark text-white">
            <v-img contain class="card-img" :src="photo.src" alt="Card image" />
            <div class="overlay">
              <h2>{{ photo.note }}</h2>
              <p>
                <a :href="photo.url">{{ photo.title }}</a>
              </p>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WorkPhoto',
  data() {
    return {
      photos: [
        {
          title: 'Ecce homo',
          src: '/photo/001.jpg',
          url: 'https://www.instagram.com/p/BxC9rfmATTG/',
          note: '2018 at.Kyoto',
        },
        {
          title: 'sea moon',
          src: '/photo/002.jpg',
          url: 'https://www.instagram.com/p/BxAGK4iAGLV/',
          note: '2018 at.Osaka',
        },
        {
          title: 'Tempus fugit',
          src: '/photo/003.jpg',
          url: 'https://www.instagram.com/p/BxEuokxACZG/',
          note: '2019 at.Wakayama',
        },
        {
          title: 'night dyed in red',
          src: '/photo/004.jpg',
          url: 'https://www.instagram.com/p/BxAPEwxAyOS/',
          note: '2018 at.Mie',
        },
        {
          title: 'when the saints go marching in',
          src: '/photo/005.jpg',
          url: 'https://www.instagram.com/p/BxBC6XEgrwJ/',
          note: '2016 at.Hyogo',
        },
        {
          title: 'goings-on forever',
          src: '/photo/006.jpg',
          url: 'https://www.instagram.com/p/Bw_DRy1gtxo/',
          note: '2018 at.Kyoto',
        },
        {
          title: 'Ut illustrant',
          src: '/photo/007.jpg',
          url: 'https://www.instagram.com/p/BxENRHiAtgc/',
          note: '2019 at.Mie',
        },
        {
          title: 'Ultima luceat',
          src: '/photo/008.jpg',
          url: 'https://www.instagram.com/p/BxENRHiAtgc/',
          note: '2019 at.Mie',
        },
        {
          title: 'In lumine tuo videbimus lumen',
          src: '/photo/009.jpg',
          url: 'https://www.instagram.com/p/BxDBUwBgsNj/',
          note: '2016 at.Hyogo',
        },
      ],
    }
  },
  head: () => ({
    title: 'gallery of travel photography',
  }),
}
</script>
<style scoped>
h1.title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Audrey, sans-serif !important;
  font-weight: 100;
}

.hover-effect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.overlay {
  font-size: 1.8rem;
  font-weight: 200;
}

.hover-effect .overlay {
  position: absolute;
  overflow: hidden;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  transition:
    opacity 0.35s,
    transform 0.35s;
  transform: scale(0, 1);
}

.hover-effect:hover .overlay {
  opacity: 1;
  transform: scale(1);
}

.hover-effect .v-image {
  display: block;
  position: relative;
  transition: all 0.35s;
}

.hover-effect:hover .v-image {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>');
  filter: brightness(0.6);
}

.hover-effect h2 {
  text-align: center;
  position: relative;
  font-size: 17px;
  background-color: transparent;
  color: #fff;
  padding: 1em 0;
  opacity: 0;
  transition:
    opacity 0.35s,
    transform 0.35s;
  transform: translate3d(0, -100%, 0);
}

.hover-effect a,
.hover-effect p {
  color: #fff;
  padding: 1em 0;
  opacity: 0;
  transition:
    opacity 0.35s,
    transform 0.35s;
  transform: translate3d(0, 100%, 0);
}

.hover-effect:hover a,
.hover-effect:hover p,
.hover-effect:hover h2 {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>
