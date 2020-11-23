<template>
  <v-container id="concerts">
    <Title en="Concerts" ja="演奏会のお知らせ" />
    <div v-for="(lc, i) in latest" id="concertList" :key="i" :index="i" :class="{ended: lc.isEnd}">
      <v-row>
        <v-col cols="4" md="5" class="pl-8 pl-md-12 d-flex flex-column justify-center">
          <span>{{ lc.date.year }}/{{ ('0' + lc.date.month).slice(-2) }}/{{ ('0' + lc.date.day).slice(-2) }}</span>
        </v-col>
        <v-col cols="8" md="7">
          <router-link :to="`/concerts/${lc.id}`">
            <span>{{ lc.title }}</span>
          </router-link>
        </v-col>
      </v-row>
      <v-divider />
    </div>
  </v-container>
</template>

<script>
import { loadCSV } from '@/lib/csv.js'
import { CONCERTS_URL } from '@/config/url.js'
import Title from '@/components/Title.vue'

export default {
  name: 'Concerts',
  components: {
    Title
  },
  data: function() {
    return {
      latest: []
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
      const pastConcerts = [];
      res.forEach(e => {
        if(e.date.raw < today){
          e['isEnd'] = true;
          pastConcerts.push(e);
        }else{
          e['isEnd'] = false;
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

<style scoped>
.ended{
}

#concertList{
  max-width: 500px;
  margin: 0 auto;
}
</style>
