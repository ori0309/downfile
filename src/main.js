import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.bus = new Vue();
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
