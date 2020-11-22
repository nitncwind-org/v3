<template>
  <v-container>
    <Title en="Wind Concours" ja="吹奏楽コンクール実績" />
    <v-tabs v-model="selectedGeneration" mandatory dense show-arrows>
      <v-tab v-for="generation in generationConcours.keys()" :key="generation" :index="generation" :value="generation">
        {{ generation }}s
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="selectedGeneration">
      <v-tab-item v-for="[generation, con] in generationConcours" :key="generation" :index="generation">
        <v-row>
          <Result v-for="(c, index) in con" :key="index" :concours="c" class="col-md-4 col-sm-6 col-12 mb-0 pb-0" />
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import Result from '@/components/Result.vue'
import { loadCSV } from '@/lib/csv.js'
import { WINDS_URL } from '@/config/url.js'
import Title from '@/components/Title.vue'

export default {
  name: 'Winds',
  components: {
    Result,
    Title
  },
  data() {
    return {
      concours: [],
      generationConcours: new Map(),
      selectedGeneration: null,
    }
  },
  created() {
    loadCSV(WINDS_URL, array => {
      let concours = {
        'year': Number(array[0]),
        'setPiece': {
          'title': array[1],
          'subtitle': array[2],
          'composer': array[3],
          'arranger': ''
        },
        'freeProgram': {
          'title': array[4],
          'subtitle': array[5],
          'composer': array[6],
          'arranger': array[7]
        },
        'concours': [
          {
            'label': '奈良県大会',
            'award': array[9],
            'isRepresent': false,
          }
        ]
      };
      if(array[12] !== ''){
        concours['concours'][0]['isRepresent'] = true;
        concours['concours'].push({
          'label': '関西大会',
          'award': array[12],
          'isRepresent': false,
        });
      }
      return concours;
    }).then(res => {
      this.concours = res.reverse();
      let m = new Map();
      this.concours.forEach(e => {
        e.generation = Math.floor(e.year / 10) * 10;
        if(m.get(e.generation) === undefined){
          m.set(e.generation, []);
        }
        m.get(e.generation).push(e);
      });
      this.generationConcours = m;
    });
  }
}
</script>

<style scoped>
.v-tab{
  text-transform: none;
}
</style>
