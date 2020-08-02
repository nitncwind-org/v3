<template>
  <v-container id="link">
  <Title en="Links" ja="リンク集"></Title>
    <div class="row">
      <div v-for="(group, index) in links" :key=index class="col-12 col-md-6 mt-0 mb-0 pt-0 pb-0">
        <v-card tile outlined >
          <v-card-title>{{ group.groupName }}</v-card-title>
          <v-card-text class="pb-0">
            <ul>
            <li v-for="(link, index) in group.links" :key=index>
              <a v-bind:href="link.url">{{ link.name }}</a>
            </li>
          </ul>
          </v-card-text>
        </v-card>

      </div>
    </div>
  </v-container>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  name: 'Link',
  components:{
    Title
  },
  data: function() {
    return {
      "links": []
    }
  },
  created: function() {
    const URL = process.env.BASE_URL + 'data/links.json';
    this.axios.get(URL).then(res => {
      this.links = res.data.links;
    });
  }
}
</script>

<style scoped>

.theme--light.v-card.v-card--outlined {
    border: none;
}
</style>