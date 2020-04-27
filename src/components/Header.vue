<template>
  <div>
    <v-app-bar id="header" dense>
      <router-link to="/">
        <v-img :src="logoImage" max-height="96" max-width="160" contain></v-img>
      </router-link>
      <div class="d-none d-sm-flex">
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/concerts">Concerts</v-btn>
      <v-btn text to="/concours">Concours</v-btn>
      <v-btn text to="/link">Link</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y content-class="max" transition="slide-x-reverse-transition" origin="right top" width="100vw">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon class="hidden-sm-and-up" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list :height=height class="fit" width="30vw">
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concerts">
            <v-list-item-title>Concerts</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concours">
            <v-list-item-title>Concours</v-list-item-title>
          </v-list-item>
          <v-list-item to="/link">
            <v-list-item-title>Link</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      drawer: null,
      logoImage: "./images/logo2.png",
    }
  },
  computed:{
    height: function(){
      return window.innerHeight - 48;
    }
  }
}
</script>

<style>
.v-menu__content.max{
  max-height: 100vh;
  max-width: 100vw;
  border-radius: 0;
  right: 0;
  box-shadow: 0 10000px 0 10000px rgba(0, 0, 0, 0.2);
}
.v-list.fit{
  margin-left: 70vw;
  z-index: 9;
  padding: 0;
  border-radius: 0;
  right: 0;
  box-shadow: 0 10px 0 10000px rgba(0, 0, 0, 0.2);
}
</style>
