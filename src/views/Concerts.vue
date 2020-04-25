<template>
  <v-container id="concerts">
    <F1 v-for="(lc, i) in latestConcerts" v-bind:d="lc" :key=i :index=i></F1>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue'

export default {
  name: 'Concerts',
  components: {
    F1
  },
  data: function() {
    return {
      latestConcerts: []
    }
  },
  created() {
    const URL = './data/latest_concerts.json';
    let date = new Date();
    this.axios.get(URL).then(res => {
      this.latestConcerts = res.data.latestConcerts;
      for(let i = 0; i < this.latestConcerts.length; i++){
        let hour = this.latestConcerts[0].start.split(':')[0];
        let minutes = this.latestConcerts[0].start.split(':')[1];
        let concertsDate = new Date(this.latestConcerts[0].date.year, this.latestConcerts[0].date.month-1, this.latestConcerts[0].date.day, hour, minutes);
        if(concertsDate < date){
          let c = this.latestConcerts.shift();
          this.latestConcerts.push(c);
        }
      }
    });
  }
}
</script>
