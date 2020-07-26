<template>
  <v-container>
    <h2>吹奏楽コンクール実績</h2>
    <v-tabs mandatory v-model="selectedGeneration" dense show-arrows>
      <v-tab v-for="generation in generationConcours.keys()" :key="generation" :index="generation" :value="generation">{{ generation }}s</v-tab>
    </v-tabs>
    <v-tabs-items v-model="selectedGeneration">
      <v-tab-item v-for="[generation, con] in generationConcours" :key="generation" :index="generation">
        <F3 v-for="(c, index) in con" :key=index v-bind:concours="c"></F3>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import F3 from '@/components/F3.vue'

export default {
  name: 'Winds',
  components: {
    F3
  },
  data() {
    return {
      concours: [],
      generationConcours: new Map(),
      selectedGeneration: null,
    }
  },
  created() {
    const URL = process.env.BASE_URL + 'data/concours.json';
    this.axios.get(URL).then(res => {
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
  }
}
</script>

<style scoped>
.v-tab{
  text-transform: none;
}
</style>
