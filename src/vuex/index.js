import Vue from 'vue'
import Vuex from 'vuex'

import api from 'assets/js/api'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 博客列表
    blogList: [],
    // 标签列表
    labelList: {
      title: '标签',
      more: '/labelList',
      names: []
    },
    // 公告
    newsList: {
      title: '公告',
      more: '/newsList',
      names: []
    },
    // 观光者
    likeNow: {
      title: '观光者',
      likes: ''
    },
    // 日历
    timeNow: {
      title: '日历'
    }
  },
  getters: {
    blogList: state => state.blogList,
    labelList: state => state.labelList,
    newsList: state => state.newsList,
    likeNow: state => state.likeNow,
    timeNow: state => state.timeNow
  },
  actions: {
    // 获取文章
    getBlogs: ({ commit }, key) => {
      api.get('/blogslist').then(res => {
        commit('GET_BLOGS', res.data)
      })
    },
    getNews: ({ commit }, key) => {
      api.get('/newslist').then(res => {
        commit('GET_NEWS', res.data)
      })
    }
  },
  mutations
})
