import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

import Footer from '@/components/Footer.vue'

Vue.use(Ionic);
window.axios = require('axios');
Vue.config.productionTip = false

Vue.component('Footer', Footer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
