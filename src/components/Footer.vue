<template>
  <v-footer app absolute class="pa-3 pl-12 pr-12 bg-gray text-primary">
    <v-row>
      <v-col lg=4 class="d-none d-lg-block text-left">
        <span>〒639-1080</span><br/>
        <span>奈良県大和郡山市矢田町22番地 合同教室</span>
      </v-col>
      <v-col col=12 lg=4 class="text-center">
        <span>&copy; 2014-{{ now }} 奈良高専吹奏楽部</span>

        <div class="d-inline d-lg-none text-center mt-6">
          <hr />
          <p>〒639-1080 奈良県大和郡山市矢田町22番地 合同教室</p>
          <a href="">
            <span><v-icon size="20px" class="mr-1 text-primary">mdi-twitter</v-icon>@NITNC_Band</span>
          </a>
        </div>
      </v-col>
      <v-col lg=4 class="d-none d-lg-block text-right">
        <a href="">
          <span><v-icon size="36px" class="mr-1 text-primary">mdi-twitter</v-icon>@NITNC_Band</span>
        </a>
      </v-col>

    </v-row>

  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: function() {
    return {
      now: ''
    }
  },
  created: function() {
    let d = new Date();
    this.now = d.getFullYear();
  }
}
</script>

<style>

  .v-footer .col{
    margin: auto 0;
  }
  
</style>

