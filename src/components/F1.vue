<template>
  <v-card tile outlined id="f1" :disabled="isEnd">
    <v-card-title class="serif text-primary mb-2 pb-0">{{ d.title }}</v-card-title>
    <v-card-text class="">
      <div v-if="d.notice" class="d-block d-lg-none alert" v-bind:class="[ d.notice.type === 'danger' ? 'alert-danger' : (d.notice.type === 'warning' ? 'alert-warning' : 'alert-info') ]"  id="notice">
        <h2 class="h6 font-weight-bold">{{ d.notice.title }}</h2>
        <p>{{ d.notice.text }}</p>
      </div>

      <div class="d-flex">
      <div id="concertInfo">
        <div v-if="d.notice" class="d-none d-lg-block alert" :class="[ d.notice.type === 'danger' ? 'alert-danger' : (d.notice.type === 'warning' ? 'alert-warning' : 'alert-info') ]" id="notice">
          <h2 class="h6 font-weight-bold">{{ d.notice.title }}</h2>
          <p>{{ d.notice.text }}</p>
        </div>
        <div id="detail">
          <p>日時：{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</p>
          <p>{{ d.open }}開場 {{ d.start }}開演</p>
          <p>会場：{{ d.place.name }}</p>
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
    <div v-if="d.place.map">
    <iframe
              :src="d.place.map" 
              width="100%"
              height="300"
              frameborder="0"
              style="border:0"
              allowfullscreen
          >
          </iframe>
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
      let concertsDate = new Date(this.d.date.year, this.d.date.month-1, this.d.date.day+1);
      return concertsDate < this.date;
    }
  }
}
</script>

<style scoped>
.theme--light.v-card--disabled{
  background-color: #EEEEEE;
}

iframe{
  margin-top: 20px;
}

.v-card--disabled iframe{
  display: none;
}

#concertPoster{
  
  width: 15vw;
  min-width: 105px;
  max-width: 210px;
  height: auto;
   
  margin-left: 5px;
}
#posterImage{
  background-color: #eee;
  width: 100%;
  height: 100%;
}
#concertInfo{
  width: 100%;
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
