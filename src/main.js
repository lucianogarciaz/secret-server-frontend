import Vue from 'vue'
import App from './App'
// import router from './router'
// import store from './store'
import VueResource from 'vue-resource'
import moment from 'moment'

Vue.use(VueResource)
Vue.use(moment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
