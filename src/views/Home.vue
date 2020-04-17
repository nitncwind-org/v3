<template>
  <div id="home">
    <p>奈良高専吹奏楽部のホームページへようこそ!</p>

    <p>
      このホームページでは奈良高専吹奏楽部の演奏会情報やコンクール結果などを掲載しています。
      なお、このホームページは奈良高専の公式Webサイトではありません。
    </p>

    <F1 v-if="latest_concerts" v-bind:d="latest_concerts"></F1>
    <Timeline :id="user_id" source-type="profile" :options="{ tweetLimit: '3' }" />
  </div>
</template>

<script>
import F1 from '@/components/F1.vue'
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'Home',
  components: {
    F1,
    Timeline
  },
  data: function() {
    return {
      latest_concerts: null,
      user_id: "NITNC_Band"
    }
  },
  created() {
    const URL = process.env.BASE_URL + '/data/latest_concerts.json';
    this.axios.get(URL).then(res => {
      this.latest_concerts = res.data;
    });
  }
}

</script>
