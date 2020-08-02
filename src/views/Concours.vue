<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scope>
  .badge{
    background-color: #1B3DB0;
  }

.v-slide-group__content.v-tabs-bar__content{
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
}

.v-application .primary--text{
    color: #1B3DB0 !important;
    caret-color: #1B3DB0 !important;
}

.title-borders{
  margin: 10px auto;
  height: 5px;
  width: 180px;
}

.title-border:nth-child(1){
  width: 50%;
  height:100%;
  background-color: #1B3DB0;
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