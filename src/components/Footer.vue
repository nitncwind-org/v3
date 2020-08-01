<template>
  <v-footer app absolute class="text-center pt-4 pb-4 bg-white">
      <span class="text-primary centering">&copy; 2014-{{ now }} 奈良高専吹奏楽部</span>
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

