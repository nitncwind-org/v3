<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary right fixed>
      <v-list>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/about">About</v-list-item>
        <v-list-item to="/concerts">Concerts</v-list-item>
        <v-list-item to="/concours">Concours</v-list-item>
        <v-list-item to="/link">Link</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar id="header">
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
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
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
