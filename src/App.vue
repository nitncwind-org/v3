<template>
  <v-app>
    <Loading v-show="loading"></Loading>
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
import Loading from '@/components/Loading_overlay'

export default {
  name: 'App',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  components: {
    Header,
    Footer,
    Loading
  }
}
</script>
