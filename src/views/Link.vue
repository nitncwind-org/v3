<template>
  <v-container id="link">
    <h2>LINK集</h2>
    <div>
      <div v-for="(group, index) in links" :key=index>
        <h3>{{ group.groupName }}</h3>
        <ul>
          <li v-for="(link, index) in group.links" :key=index>
            <a v-bind:href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Link',
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
