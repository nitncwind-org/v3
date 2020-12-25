<template>
  <v-container id="about">
    <Title en="About" ja="活動について" />
    <QandA v-for="(qa, index) in about_QandA" :key="index" :q-and-a="qa" />
  </v-container>
</template>

<script>
import QandA from "@/components/QandA.vue";
import { loadCSV } from '@/lib/csv.js';
import { ABOUT_URL } from '@/config/url.js';
import Title from "@/components/Title.vue";

export default {
  name: 'About',
  components: {
    QandA,
    Title
  },
  data: function() {
    return {
      about_QandA: []
    }
  },
  created() {
    loadCSV(ABOUT_URL, array => {
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
