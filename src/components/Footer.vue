<template>
  <v-footer app absolute class="footer">
    <span>&copy; 2014-{{ now }} 奈良高専吹奏楽部</span>
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
