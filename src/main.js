// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import '@/assets/css/animate.css'
import '@/assets/css/icons/icomoon/styles.css'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import axios from 'axios'
import qs from 'qs'

Vue.use(ElementUI)
Vue.config.productionTip = false;
// axios.interceptors.request.use((config) => {
//   config.data = qs.stringify(config.data);
//   return config;
// }, function(error) {
//   return Promise.reject(error);
// });
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})