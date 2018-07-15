import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue';
import router from './router';

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
