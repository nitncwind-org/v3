<template>
  <v-card tile outlined id="f1" :disabled="isEnd">
    <v-card-title class="serif text-primary mb-2 pb-0">{{ d.title }}</v-card-title>
    <v-card-text class="">
      
      <div v-if="d.notice" class="alert alert-danger" id="notice">
        <h2 class="h6 font-weight-bold">{{ d.notice.title }}</h2>
        <p>{{ d.notice.text }}</p>
      </div>
      <div class="d-flex">
      <div id="concertInfo">
        <div id="detail">
          <p>日時：{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</p>
          <p>{{ d.open }}開場 {{ d.start }}開演</p>
          <p>会場：{{ d.place }}</p>
          <p>
            入場料：<span v-if="d.fee===0">無料</span>
                  <span v-else>{{ d.fee }}円</span>
          </p>
        </div>
      </div>
      <div v-if="d.poster" id="concertPoster" class="">
        <div id="posterImage">
          
        </div>
      </div>
    </div>
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

#concertPoster{
  width: 210px;
  height: 297px;
  margin-left: 5px;
}
#posterImage{
  background-color: #eee;
  width: 100%;
  height: 100%;
}
#concertInfo{
  width: calc(100% - 200px);
  margin-right: 5px;
}


#notice{
  padding: 10px;
  width: 100%;
}

#notice p{
  margin-bottom: 0;
}


</style>
