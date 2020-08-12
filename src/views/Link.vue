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
import { loadCSV } from '@/lib/csv.js'

export default {
  name: 'Link',
  data: function() {
    return {
      "links": []
    }
  },
  created: function() {
    const PARAM = 'link';
    loadCSV(PARAM, array => {
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
