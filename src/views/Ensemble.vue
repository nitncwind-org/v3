<template>
  <v-container>
    <div>
      <h2>アンサンブルコンテスト</h2>
      <v-tabs mandatory v-model="selectedGeneration" dense show-arrows>
        <v-tab v-for="generation in generationEnsemble.keys()" :key="generation" :index="generation" :value="generation">{{ generation }}s</v-tab>
      </v-tabs>
      <v-tabs-items v-model="selectedGeneration">
        <v-tab-item v-for="[generation, ensemble] in generationEnsemble" :key="generation" :index="generation">
          <F3 v-for="(e, index) in ensemble" :key=index v-bind:concurs="e"></F3>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import F3 from '@/components/F3.vue'

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
    const URL = process.env.BASE_URL + '/data/ensemble.json';
    this.axios.get(URL).then(res => {
      this.ensemble = res.data.ensemble;

      let m = new Map();
      this.ensemble.forEach(e => {
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
