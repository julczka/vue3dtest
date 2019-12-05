import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vb from 'vue-babylonjs';
import vuetify from './plugins/vuetify';

Vue.use(vb);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
