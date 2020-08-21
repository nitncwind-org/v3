<template>
  <v-container id="about">
    <div>
      <F2 v-for="(qa, index) in about_QandA" :key=index v-bind:QandA="qa"></F2>
    </div>
  </v-container>
</template>

<script>
import F2 from "@/components/F2.vue";
import { loadCSV } from '@/lib/csv.js';

export default {
  name: 'About',
  components: {
    F2
  },
  data: function() {
    return {
      about_QandA: []
    }
  },
  created() {
    const PARAM = 'about';
    loadCSV(PARAM, array => {
      return {
        'question': array[0],
        'answer': array[1],
      }
    }, 1).then(res => {
      res.forEach(line => {
        line['answer'] = line['answer'].replace(/<cms-br>/g, '\n');
      });
      this.about_QandA = res;
    });
  }
}
</script>
