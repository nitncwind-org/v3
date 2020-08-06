<template>
  <div>
  <div class="jumbotron jumbotron-fluid d-none" id="top">
    <div class="position-absolute text-justify-content" id="top_title">
      <h1 class="serif font-weight-bold ">奈良高専吹奏楽部</h1>
      <h3 class="serif">Nationai Institute of Technology, Nara College Band</h3>
    </div>
  </div>
  <v-container class="" id="home">
    <div class="">
      <Hooper :settings="hooperSettings">
        <Slide v-for="(image, index) in images" :key="index" :index="index">
          <v-img :src="image" />
        </Slide>
      </Hooper>
    </div>

    <div class="row mt-0">
      <v-card tile outlined id="description" class="col-12">
        <v-card-title class="h4 mb-2 pb-0">奈良高専吹奏楽部のホームページへようこそ!</v-card-title>
        <v-card-text>
          <p>
            このホームページでは奈良高専吹奏楽部の演奏会情報やコンクール結果などを掲載しています。
            なお、このホームページは奈良高専の公式Webサイトではありません。
          </p>
        </v-card-text>
      </v-card>

      <div class="col-12 col-md-6">
        <v-card tile outlined id="nextConcert">
          <v-card-title class="h4 mb-2 pb-0 serif">Next Concert</v-card-title>
          <v-card-text>
          <F1 v-if="latestConcerts" v-bind:d="latestConcerts" id="latestConcert"></F1>
          </v-card-text>
          
          
        </v-card>

        <v-card tile outlined id="update-container">
          <v-card-title class="h4 mb-2 pb-0 serif">Updates</v-card-title>
          <v-card-text>
          <div id="new-updates">
            <dl>
              <dt class="serif text-primary">2020.08.15</dt>
              <dd>１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０</dd>
              <dt class="serif text-primary">2020.08.12</dt>
              <dd>Concertを更新しました</dd>
              <dt class="serif text-primary">2020.08.08</dt>
              <dd>Concertを更新しました</dd>
              <dt class="serif text-primary">2020.08.01</dt>
              <dd>Concertを更新しました</dd>
              <dt class="serif text-primary">2020.07.30</dt>
              <dd>Concertを更新しました</dd>
            </dl>
          </div>  
          </v-card-text>  
        </v-card>      
        
      </div>

      <div class="col-12 col-md-6">
        <v-card tile outlined id="twitter">
          <v-card-title class="h4 serif mb-2 pb-0">Twitter</v-card-title>
          <v-card-text>
          <Timeline :id="user_id" source-type="profile" :options="{height: '500', width: '100vw'}"/>
          </v-card-text>
          
        </v-card>        
      </div>

    </div>
  </v-container>
  </div>


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
        let hour = lc.start.split(':')[0];
        let minutes = lc.start.split(':')[1];
        let concertsDate = new Date(lc.date.year, lc.date.month-1, lc.date.day, hour, minutes);
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


.theme--light.v-card.v-card--outlined {
  
  border: none;
}


#new-updates{
  height: 200px;
  overflow-y: scroll;
}
#new-updates dt{
  letter-spacing: 1px;
}
#new-updates dd{
  margin-bottom: 1rem;
}

div#latestConcert div{
  padding-left: 0;
  padding-right: 0;
  padding-top:0;
}


@media only screen and (min-width: 576px) {
  div#top{
    width: 100vw;
    height: calc(100vh - 48px);
    min-height: 400px;
    background-color: #111;
    display: none;
  }

  #top_title{
    top: 10px;
    left: 10px;
  }

}


</style>
