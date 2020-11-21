<template>
  <v-card id="f1" tile outlined>
    <v-card-text class="">
      <v-alert v-if="isPublished" text prominent :type="d.notice.type">
        <h3 class="title font-weight-bold">
          {{ d.notice.title }}
        </h3>
        <div>{{ d.notice.text }}</div>
      </v-alert>

      <v-row>
        <v-col cols="12" md="4">
          <div v-if="d.poster" class="centering">
            <img id="posterImage" :src="d.poster">
          </div>
        </v-col>

        <v-col cols="12" md="8">
          <v-simple-table id="detail_table" class="mb-6">
            <tbody>
              <tr>
                <td>日時</td>
                <td>{{ d.date.year }}年{{ d.date.month }}月{{ d.date.day }}日</td>
              </tr>
              <tr>
                <td>開場 / 開演</td>
                <td>{{ d.open }} / {{ d.start }}</td>
              </tr>
              <tr>
                <td>会場</td>
                <td>{{ d.place.name }}</td>
              </tr>
              <tr>
                <td>入場料</td>
                <td>
                  <span v-if="d.fee===0">無料</span>
                  <span v-else>{{ d.fee }}円</span>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <div v-if="d.place.map">
            <iframe
              :src="d.place.map" 
              width="100%"
              height="380"
              frameborder="0"
              style="border:0"
              allowfullscreen
            />
          </div>
        </v-col>
      </v-row>

      
      
      <div class="detail-content" v-html="d.mainBody" />
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
  computed: {
    isPublished: function() {
      const today = new Date();
      if(this.d.notice.type !== undefined && this.d.notice.publishDate <= today){
        return true
      }
      return false
    }
  },
  created: function() {
    this.date = new Date();
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

#posterImage{
  background-color: #eee;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 960px) {
  #posterImage{
    width: 60%;
  }
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

#detail_table td{
  border: none;
}

.centering{
  text-align: center;
}

.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
    background: rgba(0,0,0,0);
}

.v-data-table td {
    font-size: 1rem;
}

{/* detail content */}
div.detail-content{
  color: #222;
}
div.detail-content >>> h3{
  margin-top: 20px;
}

</style>
