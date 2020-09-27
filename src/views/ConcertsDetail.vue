<template>
  <v-container id="concerts">
      <F1 v-if="concerts" v-bind:d="concerts"></F1>
      <router-link to="/concerts">一覧ページに戻る</router-link>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue'
import { loadCSV } from '@/lib/csv.js'

export default {
  name: 'Concerts',
  components: {
    F1,
  },
  data: function() {
    return {
      concerts: null,
    }
  },
  created() {
    const PARAM = 'concerts';
    loadCSV(PARAM, array => {
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
        'mainBody': array[7],
        'poster': array[8]+array[9],
        'notice': notice,
      }
    }, 1).then(res => {
      res.forEach(e => {
        if(e.id === this.$route.params.id){
          this.concerts = e;
        }
      });
    });
  }
}
</script>
