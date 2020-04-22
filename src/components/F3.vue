<template>
  <v-card id="f3" tile outlined>
    <v-card-title>{{ concurs.year }}年</v-card-title>
    <v-card-text>
      <p>
        奈良県大会 <span :class="{ gold : isGold }">{{ concurs.award }}</span>
        <span v-if="concurs.isRepresent"> & <span :class="{gold: isRepresent}">代表</span></span>
      </p>
      <p v-for="(c, i) in concurs.next" :key="i">
        {{ c.competitionName }} {{ c.award }}<span v-if="c.isRepresent"> & 代表</span>
      </p>
      <p v-if="concurs.setPiece">曲名 {{ concurs.setPiece.title }} ／ {{ concurs.freeProgram.title }}</p>
      <p v-if="concurs.music">曲名 {{ concurs.music.title }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'F3',
  props: {
    concurs: Object
  },
  computed: {
    isGold: function() {
      return this.concurs.award === "金賞";
    },
    isRepresent: function() {
      return this.concurs.isRepresent;
    }
  }
}
</script>

<style scoped>
.gold {
  color : #c06e02
}
</style>
