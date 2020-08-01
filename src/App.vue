<template>
  <v-app>
    <div id="app">
      <Header/>

      <div class="mt-1 mt-md-6">
        <v-content>
          <router-view/>
        </v-content>
      </div>

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
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  *{
    font-family: 'Lato', 'Noto Sans JP', sans-serif;
  }

  .serif{
    font-family: 'Noto Serif JP', sans-serif;
  }
  .v-application a{
    color: #6483E6 !important;
  }

  .v-application a:hover{
    color: #1B3DB0 !important;
  }

  .v-toolbar__content a{
    color:rgba(0, 0, 0, 0.87)!important;
  }


  .v-toolbar__content a:hover, a.v-list-item:hover {
    text-decoration: none;
  }

  .centering{
    margin: 0;
  }


  .text-primary{
    color: #1B3DB0 !important;
    caret-color: #1B3DB0 !important;
  }
</style>
