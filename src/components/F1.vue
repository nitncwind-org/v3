<template>
  <v-card id="f1" :disabled="isEnd">
    <v-card-title>{{ d.title }}</v-card-title>
    <v-card-text>
      <div v-if="d.notice">
        <h2>{{ d.notice.title }}</h2>
        <p>{{ d.notice.text }}</p>
      </div>
      <p>日時：{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</p>
      <p>{{ d.open }}開場 {{ d.start }}開演</p>
      <p>会場：{{ d.place }}</p>
      <p>
        入場料：<span v-if="d.fee===0">無料</span>
              <span v-else>{{ d.fee }}円</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'F1',
  props: {
    d: Object
  },
  data: function() {
    return {
      date: null
    }
  },
  created: function() {
    this.date = new Date();
  },
  computed: {
    isEnd: function() {
      let hour = this.d.start.split(':')[0];
      let minutes = this.d.start.split(':')[1];
      let concertsDate = new Date(this.d.date.year, this.d.date.month-1, this.d.date.day, hour, minutes);
      return concertsDate < this.date;
    }
  }
}
</script>

<style scoped>
.theme--light.v-card--disabled{
  background-color: #EEEEEE;
}
</style>
