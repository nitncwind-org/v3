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
      <v-menu offset-y content-class="max" transition="slide-y-transition" >
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon class="hidden-sm-and-up" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list width="100vw">
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
  }
}
</script>

<style>
.v-menu__content.max{
  max-width: 100%;
  border-radius: 0;
  box-shadow: none;
}
</style>
