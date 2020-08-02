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
    const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Q7Js-P1gSXoL7h09WP-0zayDaCEeRjdcNdgg4pTtlXfWy8RPpmE65dlZJwhci5DcrlLnD9P3At8h/pub?gid=0&single=true&output=csv';
    loadCSV(URL, array => {
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
