// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 重置全局样式
import 'assets/css/reset.css'
// 引入sdsd
import 'font-awesome/css/font-awesome.css'
// 引入动画样式
import 'assets/css/animate.css'
// 引入路由
import router from './router'
// 引入vuex
import store from './vuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
