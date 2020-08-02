<template>
  <v-container id="concerts">

      <Title en="Concerts" ja="コンサート情報"></Title>

    <F1 v-for="(lc, i) in latest" v-bind:d="lc" :key=i :index=i></F1>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue'
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
    const URL = process.env.BASE_URL + 'data/latest.json';
    let date = new Date();
    this.axios.get(URL).then(res => {
      this.latest = res.data.latest;
      for(let i = 0; i < this.latest.length; i++){
        let hour = this.latest[0].start.split(':')[0];
        let minutes = this.latest[0].start.split(':')[1];
        let concertsDate = new Date(this.latest[0].date.year, this.latest[0].date.month-1, this.latest[0].date.day, hour, minutes);
        if(concertsDate < date){
          let c = this.latest.shift();
          this.latest.push(c);
        }
      }
    });
  }
}
</script>
