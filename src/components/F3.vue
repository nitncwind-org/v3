<template>
  <v-card id="f3" tile outlined>
    <v-card-title>{{ concours.year }}年</v-card-title>
    <v-card-text>
      <p v-for="(c, i) in concours.concours" :key="i">
        {{ c.label }}
        <span :class="{ gold : isGold(c.award) }">{{ c.award }}</span>
        <span v-if="c.isRepresent"> & <span :class="{gold: c.isRepresent}">代表</span></span>
      </p>
      <p v-if="concours.setPiece">曲名 {{ concours.setPiece.title }} ／ {{ concours.freeProgram.title }}</p>
      <p v-if="concours.music">曲名 {{ concours.music.title }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'F3',
  props: {
    concours: Object
  },
  computed: {
    isGold: function() {
      return function(award) {
        return award === "金賞";
      }
    },
    isRepresent: function() {
      return this.concours.isRepresent;
    }
  }
}
</script>

<style scoped>
.gold {
  color : #c06e02
}
</style>
