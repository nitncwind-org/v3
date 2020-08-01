<template>
  <v-container id="home">
    <Hooper :settings="hooperSettings">
      <Slide v-for="(image, index) in images" :key="index" :index="index">
        <v-img :src="image" />
      </Slide>
    </Hooper>

    <p>奈良高専吹奏楽部のホームページへようこそ!</p>

    <p>
      このホームページでは奈良高専吹奏楽部の演奏会情報やコンクール結果などを掲載しています。
      なお、このホームページは奈良高専の公式Webサイトではありません。
    </p>

    <F1 v-if="latestConcerts" v-bind:d="latestConcerts"></F1>
    <Timeline :id="user_id" source-type="profile" :options="{height: '500', width: '100'}"/>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue';
import { Timeline } from 'vue-tweet-embed';
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Home',
  components: {
    F1,
    Timeline,
    Hooper,
    Slide,
  },
  data: function() {
    return {
      latestConcerts: null,
      user_id: "NITNC_Band",
      images: [],
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        transition: 600,
        hoverPause: false,
      },
    }
  },
  created() {
    const URL1 = process.env.BASE_URL + 'data/latest.json';
    const URL2 = process.env.BASE_URL + 'data/top.json';
    this.axios.get(URL1).then(res => {
      let latestConcertsList = res.data.latest;
      latestConcertsList.forEach(lc => {
        let concertsDate = new Date(lc.date.year, lc.date.month-1, lc.date.day+1);
        if(concertsDate >= new Date() && this.latestConcerts === null){
          this.latestConcerts = lc;
        }
      });
    });
    this.axios.get(URL2).then(res => {
      let imagesPath = res.data.images.map(e => {
        return process.env.BASE_URL + 'images/top/' + e;
      });
      this.images = imagesPath;
    });
  }
}

</script>

<style scoped>
.hooper{
  height: auto;
}
</style>

<style>
/* vuetifyによる"ul"へのpadding-leftスタイルを打ち消している */
.v-application .hooper-track{
  padding: 0;
}
</style>
