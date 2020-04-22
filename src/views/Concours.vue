<template>
  <div id="concours">
    <div>
      <h2>吹奏楽コンクール実績</h2>
      <v-btn-toggle mandatory v-model="selectedGeneration" dense>
        <v-btn v-for="generation in generationConcours.keys()" :key="generation" :index="generation" :value="generation">{{ generation }}s</v-btn>
      </v-btn-toggle>
      <v-card v-for="[generation, con] in generationConcours" :key="generation" :index="generation" v-show="generation === selectedGeneration">
        <F3 v-for="(c, index) in con" :key=index v-bind:concurs="c"></F3>
      </v-card>
    </div>
    <div>
      <h2>アンサンブルコンテスト</h2>
      <F3 v-for="(e, index) in ensemble" :key=index v-bind:concurs="e"></F3>
    </div>
  </div>
</template>

<script>
import F3 from '@/components/F3.vue'

export default {
  name: 'Concours',
  components: {
    F3
  },
  data() {
    return {
      concours: [],
      ensemble: [],
      generationConcours: new Map(),
      selectedGeneration: null,
    }
  },
  created() {
    const URL1 = './data/concours.json';
    const URL2 = './data/ensemble.json';
    this.axios.get(URL1).then(res => {
      this.concours = res.data.concours;

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
    this.axios.get(URL2).then(res => {
      this.ensemble = res.data.ensemble;
      this.ensemble.forEach(e => {
        e.generation = Math.floor(e.year / 10) * 10;
      });
    });
  }
}
</script>

<style scoped>
.v-btn{
  text-transform: none;
}
</style>
