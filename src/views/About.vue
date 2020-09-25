<template>
  <v-container id="about">
    <Title en="About" ja="活動について"></Title>
    <F2 v-for="(qa, index) in about_QandA" :key=index v-bind:QandA="qa"></F2>
  </v-container>
</template>

<script>
import F2 from "@/components/F2.vue";
import { loadCSV } from '@/lib/csv.js';
import Title from "@/components/Title.vue";

export default {
  name: 'About',
  components: {
    F2,
    Title
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
