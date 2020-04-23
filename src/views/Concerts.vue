<template>
  <v-container id="concerts">
    <F1 v-if="latest_concerts" v-bind:d="latest_concerts"></F1>
  </v-container>
</template>

<script>
import F1 from '@/components/F1.vue'

export default {
  name: 'Concerts',
  components: {
    F1
  },
  data: function() {
    return {
      latest_concerts: null
    }
  },
  created() {
    const URL = './data/latest_concerts.json';
    this.axios.get(URL).then(res => {
      this.latest_concerts = res.data;
    });
  }
}
</script>
