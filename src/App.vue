<template>
  <v-app>
    <div id="app">
      <Header/>

      <v-content>
        <router-view/>
      </v-content>

      <Footer/>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>
