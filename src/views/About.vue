<template>
  <v-container id="about">
    <div>
      <F2 v-for="(qa, index) in about_QandA" :key=index v-bind:QandA="qa"></F2>
    </div>
  </v-container>
</template>

<script>
import F2 from "@/components/F2.vue";

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
    const URL = './data/about.json'
    this.axios.get(URL).then(res => {
      this.about_QandA = res.data.about;
    });
  }
}
</script>
