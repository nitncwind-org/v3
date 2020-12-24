<template>
  <v-container>
    <Title en="News" ja="お知らせ" />
    <div v-for="(news, i) in newsList" id="newsList" :key="i" :index="i">
      <v-row>
        <v-col cols="4" md="4" class="pl-4 pl-md-12 d-flex flex-column justify-center">
          {{ getFormatDate(news) }}
        </v-col>
        <v-col cols="8" md="8">
          <router-link :to="`/news/${news.id}`">
            {{ news.title }}
          </router-link>
        </v-col>
      </v-row>
      <v-divider />
    </div>
  </v-container>
</template>

<script>
import Title from "@/components/Title.vue";
import { loadCSV } from '@/lib/csv.js';
import { NEWS_URL } from '@/config/url.js';

export default {
  name: 'News',
  components: {
    Title
  },
  data: function() {
    return {
      newsList: []
    }
  },
  created() {
    loadCSV(NEWS_URL, array => {
      const date = new Date(array[3]);
      const publishDate = new Date(array[6]);
      const bannerCloseDate = new Date(array[7]);
      const today = new Date();
      return {
        'id': array[0],
        'title': array[1],
        'text': array[2],
        'date': {
          'raw': date,
          'year': date.getFullYear(),
          'month': date.getMonth()+1,
          'day': date.getDate(),
        },
        'addressee': array[4],
        'sender': array[5],
        'publishDate': {
          'raw': publishDate,
          'year': publishDate.getFullYear(),
          'month': publishDate.getMonth()+1,
          'day': publishDate.getDate(),
        },
        'isPublished': publishDate <= today,
        'bannerCloseDate': {
          'raw': bannerCloseDate,
          'year': bannerCloseDate.getFullYear(),
          'month': bannerCloseDate.getMonth()+1,
          'day': bannerCloseDate.getDate(),
        },
        'bannerType': array[8],
      }
    }, 1).then(res => {
      const newsList = [];
      res.forEach(news => {
        news['text'] = news['text'].replace(/<cms-br>/g, '\n');
        if(news['isPublished']){
          newsList.push(news);
        }
      });
      this.newsList = newsList;
    });
  },
  methods:{
    getFormatDate: function(news){
      const year = news.date.year;
      const month = ('0' + news.date.month).slice(-2);
      const day = ('0' + news.date.day).slice(-2);
      return year+'/'+month+'/'+day;
    }
  }
}
</script>

<style scoped>
#newsList{
  max-width: 640px;
  margin: 0 auto;
}
</style>

