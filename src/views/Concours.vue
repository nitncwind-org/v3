<template>
  <div>
    <div class="jumbotron jumbotron-fluid text-center bg-white">
      <h1>Concours</h1>
    </div>
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
</style>