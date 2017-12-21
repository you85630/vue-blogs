// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入路由
import router from './router'
// 引入vuex
import store from './vuex'
// 重置全局样式
import 'assets/css/reset.css'
// 引入动画样式
import 'assets/css/animate.css'
// 引入fontawesome
import 'font-awesome/css/font-awesome.css'
// 引入时间戳
import moment from 'moment'
Vue.prototype.moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  moment,
  template: '<App/>',
  components: {
    App
  }
})
