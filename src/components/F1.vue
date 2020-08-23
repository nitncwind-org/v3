<template>
  <v-card tile outlined id="f1" :disabled="isEnd">
    
    <v-card-text class="">
      <div v-if="d.notice" class="alert" v-bind:class="[ d.notice.type === 'danger' ? 'alert-danger' : (d.notice.type === 'warning' ? 'alert-warning' : 'alert-info') ]"  id="notice">
        <h2 class="h6 font-weight-bold">{{ d.notice.title }}</h2>
        <p>{{ d.notice.text }}</p>
      </div>

      <div class="d-flex" id="concertInfo" style="column-gap: 20px; justify-content:space-between;">

          <div id="detail">
            <v-card-title class="text-primary mt-0 mb-0 pt-0 pl-0">{{ d.title }}</v-card-title>
            <p>日時：{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</p>
            <p>{{ d.open }}開場 {{ d.start }}開演</p>
            <p>会場：{{ d.place.name }}</p>
            <p>
              入場料：<span v-if="d.fee===0">無料</span>
                    <span v-else>{{ d.fee }}円</span>
            </p>
          </div>

      
        
        <div v-if="d.poster" id="concertPoster" >
          <div id="posterImage">
            
          </div>
        </div>

        <div v-if="d.place.map" class="large d-none d-md-block">
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
    </div>

    <div v-if="d.place.map" class="small d-block d-md-none">
      <iframe
        :src="d.place.map" 
        width="100%"
        height="300"
        frameborder="0"
        style="border:0"
        id
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

#notice{
  padding: 10px;
  width: 100%;
}

#notice p{ 
  margin-bottom: 0;
}

#detail{
  margin-right: 5px;
  width: 100%;
}


#concertPoster{
  width: 25vw;
  min-width: 180px;

  height: auto;
}

#posterImage{
  background-color: #eee;
  width: 100%;
  height: 100%;
}

div.large{
  width: -webkit-fill-available;
}

.small iframe{
  margin-top: 20px;
}

.v-card--disabled iframe{
  display: none;
}





</style>
