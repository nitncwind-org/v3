<template>
  <v-col cols="12" sm="6" md="4">
    <v-card tile outlined>
      <v-card-title class="h4 serif text-primary d-none">
        {{ concours.year }}
      </v-card-title>
      <v-card-text>
        <div class="">
          <span class="h4 serif text-primary">{{ concours.year }}</span>
        </div>
        
        <div>
          <div v-for="(c, i) in concours.concours" :key="i" class="badge badge-primary rounded-0 mr-2 mb-1">
            <span>{{ c.label }} </span>
            <span :class="{ gold : isGold(c.award)}">{{ c.award }}</span>
            <span v-if="c.isRepresent"> & <span :class="{gold: c.isRepresent}">代表</span></span>
          </div>
          <p v-if="concours.setPiece">
            {{ concours.setPiece.title }} ／ {{ concours.freeProgram.title }}
          </p>
          <p v-if="concours.music">
            {{ concours.music.title }}
          </p>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'Result',
  props: {
    concours: {
      type: Object,
      require: true,
      default: () => {}
    }
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
  color : #FFD700
}

.theme--light.v-card.v-card--outlined {
  
  border: none;
}

.theme--light.v-card.v-card--outlined:nth-child(12){
border-top: thin solid rgba(0, 0, 0, 0.12);
}

div.badge span{
  font-size: 0.75rem;
}
</style>
