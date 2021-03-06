// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入组件mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/* axios */
import axios from 'axios'
import $ from 'jquery'
import './../static/css/style.css'
import 'lib-flexible/flexible'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use($)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
