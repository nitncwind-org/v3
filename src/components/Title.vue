<template>
  <div class="jumbotron jumbotron-fluid centering text-center bg-none">
    <div class="w-100">
      <h1 class="serif">
        {{ en }}
      </h1>
      <div class="title-borders text-center d-flex">
        <div class="title-border" />
        <div class="title-border" />
        <div class="title-border" />
      </div>
      <span class="font-weight-bold header-jp">{{ ja }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    'ja': {
      type: String,
      require: true,
      default: '',
    },
    'en': {
      type: String,
      require: true,
      default: '',
    }
  }
}
</script>

<style scoped>
.theme--light.v-card.v-card--outlined {
  border: none;
}

.title-borders{
  margin: 10px auto;
  height: 5px;
  width: 150px;
}

.title-border:nth-child(1){
  width: 50%;
  height:100%;
  background-color: #0e177f;
}

.title-border:nth-child(2){
  width: 50%;
  height: 100%;
  background-color: #cccccc;
}

.title-border:nth-child(3){
  width: 50%;
  height: 100%;
  background-color: #000000;
}
</style>
