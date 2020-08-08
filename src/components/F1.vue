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
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.114194961175!2d135.77988601523091!3d34.651818880447046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013a8d2ee4af33%3A0x7633409ce16f37a5!2zRE1HIE1PUkkg44KE44G-44Go6YOh5bGx5Z-O44Ob44O844Or!5e0!3m2!1sja!2sjp!4v1596822109614!5m2!1sja!2sjp3" 
              width="100%"
              height="300"
              frameborder="0"
              style="border:0"
              allowfullscreen
          >
          </iframe>
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
