// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './assets/font-awesome/css/font-awesome.min.css'
import VueBlu from 'vue-blu'
import '../node_modules/vue-blu/dist/css/vue-blu.min.css'
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(VueBlu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
