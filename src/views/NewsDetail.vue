<template>
  <v-container>
      <div v-if="news">
        <div>{{ getFormatDate(news) }}</div>
        <div>{{ news.addressee }}</div>
        <div>{{ news.sender }}</div>
        <div>{{ news.title }}</div>
        <div v-html="news.text"></div>
      </div>
      <router-link to="/news">一覧ページに戻る</router-link>
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
      this.allNews = res;
    });
  }
}
</script>
