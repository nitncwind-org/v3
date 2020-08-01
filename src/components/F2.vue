<template>
  <v-card tile outlined>
    <v-card-title>{{ QandA.question }}</v-card-title>
    <v-card-text v-html="QandA.answer"></v-card-text>
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
