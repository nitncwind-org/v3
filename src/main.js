import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';
import VueGtag from 'vue-gtag';

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VueGtag, {
  config: { id: process.env.GA_ID }
}, router)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
