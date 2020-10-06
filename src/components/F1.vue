<template>
  <v-card tile outlined id="f1">
    
    <v-card-text class="">
      <v-alert v-if="isPublished" text prominent :type="d.notice.type">
        <h3 class="title font-weight-bold">{{ d.notice.title }}</h3>
        <div>{{ d.notice.text }}</div>
      </v-alert>

      <v-row>
        <v-col cols=12 md=4>
          <div v-if="d.poster" class="">
            <img id="posterImage" :src="d.poster">
          </div>
        </v-col>

        <v-col cols=12 md=8>
          <div id="detail">
            <p>日時：{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</p>
            <p>{{ d.open }}開場 {{ d.start }}開演</p>
            <p>会場：{{ d.place.name }}</p>
            <p>
              入場料：<span v-if="d.fee===0">無料</span>
                    <span v-else>{{ d.fee }}円</span>
            </p>
          </div>
          <div v-if="d.place.map">
            <iframe
              :src="d.place.map" 
              width="100%"
              height="380"
              frameborder="0"
              style="border:0"
              allowfullscreen
            >
            </iframe>
          </div>
        </v-col>

      </v-row>

      
      <v-divider></v-divider>
      <div v-html="d.mainBody">
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
    isPublished: function() {
      const today = new Date();
      if(this.d.notice.type !== undefined && this.d.notice.publishDate <= today){
        return true
      }
      return false
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
