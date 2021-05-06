<template>
  <v-container id="newsDetail">
    <div v-if="news" class="pt-4 pt-md-8">
      <div class="text-right">
        {{ getFormatDate(news) }}
      </div>
      <div>{{ news.addressee }}</div>
      <div class="text-right">
        {{ news.sender }}
      </div>

      <div class="text-center pt-12 pb-8 h5">
        {{ news.title }}
      </div>
      <div v-html="news.text" />
    </div>
    <div class="text-right pt-8 pb-8">
      <router-link to="/news">
        一覧ページに戻る
      </router-link>
    </div>
  </v-container>
</template>

<script>
import { loadCSV } from '@/lib/csv.js'
import { NEWS_URL } from '@/config/url.js';

export default {
  name: 'NewsDetail',
  components: {
  },
  data: function() {
    return {
      allNews: [],
      news: null
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
      res.forEach(news => {
        news['text'] = news['text'].replace(/<cms-br>/g, '\n');
        if(news['isPublished'] && news.id === this.$route.params.id){
          this.news = news;
        }
      });
      if(this.news === null){
        this.$router.replace({path: '/404'});
      }
      this.allNews = res;
    });
  },
  methods:{
    getFormatDate: function(news){
      const year = news.date.year;
      const month = ('0' + news.date.month).slice(-2);
      const day = ('0' + news.date.day).slice(-2);
      return year+'年'+month+'月'+day+'日';
    }
  },
  beforeRouteUpdate(to, from, next){
    this.allNews.forEach(news => {
      if(news['isPublished'] && news.id === to.params.id){
        this.news = news;
      }
    });
    next();
  }
}
</script>

<style scoped>
#newsDetail{
  max-width: 640px;
  margin: 0 auto;
}
</style>

