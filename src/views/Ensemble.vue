<template>
  <v-container>
    <div>
      <h2>アンサンブルコンテスト</h2>
      <v-tabs mandatory v-model="selectedGeneration" dense show-arrows>
        <v-tab v-for="generation in generationEnsemble.keys()" :key="generation" :index="generation" :value="generation">{{ generation }}s</v-tab>
      </v-tabs>
      <v-tabs-items v-model="selectedGeneration">
        <v-tab-item v-for="[generation, ensemble] in generationEnsemble" :key="generation" :index="generation">
          <F3 v-for="(e, index) in ensemble" :key=index v-bind:concours="e"></F3>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import F3 from '@/components/F3.vue'
import { loadCSV } from '@/lib/csv.js'

export default {
  name: 'Ensemble',
  components: {
    F3
  },
  data() {
    return {
      ensemble: [],
      generationEnsemble: new Map(),
      selectedGeneration: null,
    }
  },
  created() {
    const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT8vFy4UweqZfIMkZZj_zqokw4_A0xHsELfAh8o1DagJ6E7Ha8FCBVU2KzwE7x_AtbglzTzhLtXjVpA/pub?gid=1956307013&single=true&output=csv';
    loadCSV(URL, array => {
      let ensemble = {
        'year': Number(array[0]),
        'music': {
          'title': array[1],
          'subtitle': array[2],
          'composer': array[3],
          'arranger': array[4]
        },
        'concours':[
          {
            'label': '奈良県大会',
            'award': array[6],
            'isRepresent': false
          }
        ]
      };
      if(array[9] !== ''){
        ensemble['concours'][0]['isRepresent'] = true;
        if(ensemble.year === 1972){
          // 1972年は奈良県大会がないので消す
          ensemble['concours'].pop();
        }
        ensemble['concours'].push({
          'label': '関西大会',
          'award': array[9],
          'isRepresent': false,
        });
      }
      return ensemble;
    }).then(res => {
      this.ensemble = res.reverse();
      let m = new Map();
      this.ensemble.forEach(e => {
        if(isNaN(e.year)){
          return;
        }
        e.generation = Math.floor(e.year / 10) * 10;
        if(m.get(e.generation) === undefined){
          m.set(e.generation, []);
        }
        m.get(e.generation).push(e);
      });
      this.generationEnsemble = m;
    });
  }
}
</script>

<style scoped>
.v-tab{
  text-transform: none;
}
</style>
