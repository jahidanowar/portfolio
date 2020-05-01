<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>


<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  created () {
    this.$vuetify.theme.dark = true
  },
}
</script>


<style lang="scss">
  .v-application {
    font-family: 'Inter', sans-serif !important;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Manrope', sans-serif;
  }
  
</style>
