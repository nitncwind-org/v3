<template>
  <div>
    <v-app-bar id="header" dense short flat>
      <router-link to="/">
        <v-img :src="logoImage" max-height="96" max-width="160" contain></v-img>
      </router-link>
      <div class="d-none d-sm-flex">
      <v-btn text to="/about" large tile>活動について</v-btn>
      <v-btn text to="/concerts" large tile>演奏会のお知らせ</v-btn>
      <v-menu offset-y v-model="isOpen">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text large tile>
            活動実績
            <v-icon v-bind:class="{rotate: isOpen}">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/concours/winds">
            <v-list-item-title>吹奏楽コンクール</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concours/ensemble">
            <v-list-item-title>アンサンブルコンテスト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text to="/link" large tile>リンク集</v-btn>
      <v-btn text to="/contact" large tile>お問い合わせ</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y content-class="max" transition="slide-x-reverse-transition" origin="right top" width="100vw">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon class="hidden-sm-and-up" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list :height=height class="fit" width="50vw">
          <v-list-item to="/">
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>活動について</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concerts">
            <v-list-item-title>演奏会のお知らせ</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concours/winds">
            <v-list-item-title>吹奏楽コンクール実績</v-list-item-title>
          </v-list-item>
          <v-list-item to="/concours/ensemble">
            <v-list-item-title>アンサンブルコンテスト実績</v-list-item-title>
          </v-list-item>
          <v-list-item to="/link">
            <v-list-item-title>リンク集</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-title>お問い合わせ</v-list-item-title>
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
      logoImage: process.env.BASE_URL + "images/logo2.png",
      isOpen: false,
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
  margin-left: 50vw;
  z-index: 9;
  padding: 0;
  border-radius: 0;
  right: 0;
  box-shadow: 0 10px 0 10000px rgba(0, 0, 0, 0.2);
}
.rotate{
  transform: rotateZ(180deg);
}
</style>
