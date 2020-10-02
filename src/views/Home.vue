<template>
  <div>
  <div class="jumbotron jumbotron-fluid d-none p-0" id="top">
    <div class="position-absolute text-justify-content d-none" id="top_title">
      <h1 class="serif font-weight-bold ">奈良高専吹奏楽部</h1>
      <h3 class="serif">National Institute of Technology, Nara College Band</h3>
    </div>
    <Hooper :settings="hooperSettings" :mouseDrag="false" :wheelControl="false">
        <Slide v-for="(image, index) in images" :key="index" :index="index" >
          <v-img :src="image" />
        </Slide>
    </Hooper>

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
          <v-card-title class="h4 mb-2 pb-0">次回の演奏会</v-card-title>
          <v-card-text>
          <F1 v-if="latestConcerts" v-bind:d="latestConcerts" id="latestConcert"></F1>
          </v-card-text>
          
          
        </v-card>

        <v-card tile outlined id="update" class="d-none">
          <v-card-title class="h4 mb-2 pb-0">更新情報</v-card-title>
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
import { loadCSV } from '@/lib/csv.js'
import { CONCERTS_URL } from '@/config/url.js';

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
    loadCSV(CONCERTS_URL, array => {
      const date = new Date(array[2]);
      const openDate = new Date(array[3]);
      const open = (array[3] !== "")?
                  openDate.getHours() + ':' + ('0'+openDate.getMinutes()).slice(-2):
                  '';
      const startDate = new Date(array[4]);
      const start = (array[4] !== "")?
                  startDate.getHours() + ':' + ('0'+startDate.getMinutes()).slice(-2):
                  '';
      const notice = {};
      if(array[12]){
        notice['type'] = array[12],
        notice['title'] = array[13],
        notice['text'] = array[14],
        notice['publishDate'] = new Date(array[15])
      }
      return {
        'id': array[0],
        'title': array[1],
        'date': {
          'raw': date,
          'year': date.getFullYear(),
          'month': date.getMonth()+1,
          'day': date.getDate(),
        },
        'open': open,
        'start': start,
        'place': {
          'name': array[5],
          'mapType': array[10],
          'map': array[11]
        },
        'fee': Number(array[6]),
        'poster': array[8]+array[9],
        'notice': notice,
      }
    }, 1).then(res => {
      const today = new Date();
      const futureConcerts = [];
      res.forEach(e => {
        if(e.date.raw > today){
          futureConcerts.push(e);
        }
      });
      futureConcerts.sort(function(a, b){
        if(a.date.raw > b.date.raw){
          return 1;
        }
        if(a.date.raw < b.date.raw){
          return -1;
        }
        return 0;
      });
      if(futureConcerts.length > 0){
        this.latestConcerts = futureConcerts[0];
      }
    });

    const URL2 = process.env.BASE_URL + 'data/top.json';
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

.text-primary{
    color: #0e177f !important;
    caret-color: #0e177f !important;
  }

.badge.badge-primary{
    background-color: #0e177f;
}


</style>
