<template>
  <v-card tile outlined>
    <v-card-title class="h4 mb-2 pb-0">
      {{ qAndA.question }}
    </v-card-title>
    <v-card-text v-html="qAndA.answer" />
  </v-card>
</template>

<script>
export default {
  name: 'QandA',
  props: {
    'qAndA': {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.theme--light.v-card.v-card--outlined {
  border: none;
}
</style>
