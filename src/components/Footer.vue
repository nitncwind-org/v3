<template>
  <v-footer app absolute padless dark color="info darken-2" class="pl-12 pr-12">
    <v-row>
      <v-col lg=4 class="d-none d-lg-block text-left text-caption">
        <span>〒639-1080</span><br/>
        <span>奈良県大和郡山市矢田町22番地 合同教室</span>
      </v-col>
      <v-col col=12 lg=4 class="text-center d-inline text-caption">
        <span>&copy; 2014-{{ now }} 奈良高専吹奏楽部</span>

        <div class="d-inline d-lg-none text-center">
          <br/>
          <span>〒639-1080 奈良県大和郡山市矢田町22番地 合同教室</span><br/>
          <div class="social">
            <a href="https://twitter.com/NITNC_Band">
              <span><v-icon size="20px" class="mr-1">mdi-twitter</v-icon>@NITNC_Band</span>
            </a>
          </div>

        </div>
      </v-col>
      <v-col lg=4 class="d-none d-lg-block text-right">
        <div class="social">
          <a href="https://twitter.com/NITNC_Band">
            <span><v-icon size="36px" class="mr-1">mdi-twitter</v-icon>@NITNC_Band</span>
          </a>
        </div>
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

<style scoped>
  .v-footer .social a{
    color: #ffffff!important;
  }
  .v-footer .social a:hover{
    opacity: 0.7;
    text-decoration: none;
  }

</style>

