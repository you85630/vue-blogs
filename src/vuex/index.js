import Vue from 'vue'
import Vuex from 'vuex'

import api from 'assets/js/api'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topNav: []
  },
  getters: {
    topNav: state => state.topNav
  },
  actions: {
    // 获取数据
    getData: ({ commit }, key) => {
      api.get('/topNav').then(res => {
        commit('GET_DATA', res.data)
      })
    }
  },
  mutations
})
