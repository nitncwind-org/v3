<template>
  <v-card tile outlined>
    <v-card-title class="h4 mb-2 pb-0">
      {{ QandA.question }}
    </v-card-title>
    <v-card-text v-html="QandA.answer" />
  </v-card>
</template>

<script>
export default {
  name: 'F2',
  props: [
    'QandA'
  ]
}
</script>

<style scoped>

.theme--light.v-card.v-card--outlined {
    border: none;
}
</style>
