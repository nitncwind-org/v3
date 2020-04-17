<template>
  <div id="concours">
    <div>
      <h2>吹奏楽コンクール実績</h2>
      <F3 v-for="(c, index) in concours" :key=index v-bind:concurs="c"></F3>
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
    }
  },
  created() {
    const URL1 = process.env.BASE_URL + '/data/concours.json';
    const URL2 = process.env.BASE_URL + '/data/ensemble.json';
    this.axios.get(URL1).then(res => {
      this.concours = res.data.concours;
    });
    this.axios.get(URL2).then(res => {
      this.ensemble = res.data.ensemble;
    });
  }
}
</script>
