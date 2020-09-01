<template>
  <v-container id="concerts">

      <Title en="Concerts" ja="演奏会のお知らせ"></Title>

    <F1 v-for="(lc, i) in latest" v-bind:d="lc" :key=i :index=i></F1>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue'
import { loadCSV } from '@/lib/csv.js'
import Title from '@/components/Title.vue'

export default {
  name: 'Concerts',
  components: {
    F1,
    Title
  },
  data: function() {
    return {
      latest: []
    }
  },
  created() {
    const PARAM = 'concerts';
    loadCSV(PARAM, array => {
      const date = new Date(array[1]);
      const openDate = new Date(array[2]);
      const open = (array[2] !== "")?
                  openDate.getHours() + ':' + ('0'+openDate.getMinutes()).slice(-2):
                  '';
      const startDate = new Date(array[3]);
      const start = (array[3] !== "")?
                  startDate.getHours() + ':' + ('0'+startDate.getMinutes()).slice(-2):
                  '';
      const notice = {};
      if(array[11]){
        notice['type'] = array[11],
        notice['title'] = array[12],
        notice['text'] = array[13],
        notice['publishDate'] = new Date(array[14])
      }
      return {
        'title': array[0],
        'date': {
          'raw': date,
          'year': date.getFullYear(),
          'month': date.getMonth()+1,
          'day': date.getDate(),
        },
        'open': open,
        'start': start,
        'place': {
          'name': array[4],
          'mapType': array[9],
          'map': array[10]
        },
        'fee': array[5],
        'poster': array[7]+array[8],
        'notice': notice,
      }
    }, 1).then(res => {
      const today = new Date();
      const futureConcerts = [];
      const pastConcerts = [];
      res.forEach(e => {
        if(e.date.raw < today){
          pastConcerts.push(e);
        }else{
          futureConcerts.push(e);
        }
      });

      pastConcerts.sort(function(a, b){
        if(a.date.raw > b.date.raw){
          return -1;
        }
        if(a.date.raw < b.date.raw){
          return 1;
        }
        return 0;
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

      this.latest = futureConcerts.concat(pastConcerts);
    });
  }
}
</script>
