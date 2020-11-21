<template>
  <v-container id="link">
    <Title en="Links" ja="リンク集" />
    <div class="row">
      <div v-for="(group, i) in links" :key="i" class="col-12 col-md-6 mt-0 mb-0 pt-0 pb-0">
        <v-card tile outlined>
          <v-card-title class="h4 mb-2 pb-0">
            {{ group.groupName }}
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="(link, index) in group.links" :key="index">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import { loadCSV } from '@/lib/csv.js'
import { LINK_URL } from '@/config/url.js'
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
    loadCSV(LINK_URL, array => {
      return {
        'group': array[0],
        'name': array[1],
        'url': array[2],
      }
    }, 1).then(res =>{
      let links = res.reduce((links, link) =>
        Object.assign(links, {
          [link['group']]: (links[link['group']] || []).concat(link)
        })
      , {});
      this.links = Object.entries(links).map(e => {
        return {
          'groupName': e[0],
          'links': e[1]
        }
      });
    });
  }
}
</script>

<style scoped>

.theme--light.v-card.v-card--outlined {
    border: none;
}
</style>
