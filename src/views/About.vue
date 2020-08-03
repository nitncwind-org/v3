<template>
  <v-container id="about">
    <Title en="About" ja="活動について"></Title>
    <F2 v-for="(qa, index) in about_QandA" :key=index v-bind:QandA="qa"></F2>
  </v-container>
</template>

<script>
import F2 from "@/components/F2.vue";
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
    const URL = process.env.BASE_URL + 'data/about.json'
    this.axios.get(URL).then(res => {
      this.about_QandA = res.data.about;
    });
  }
}
</script>
