import Vue from 'vue'
import Vuex from 'vuex'

import api from 'assets/js/api'
import * as types from './types'
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
    // 日历
    timeNow: {
      title: '日历'
    }
  },
  getters: {
    blogList: state => state.blogList,
    labelList: state => state.labelList,
    newsList: state => state.newsList,
    timeNow: state => state.timeNow
  },
  actions: {
    // 获取文章
    getBlogs: ({ commit }, key) => {
      api.get('/api/blogslist').then(res => {
        commit('GET_BLOGS', res.data)
      })
    },
    getNews: ({ commit }, key) => {
      api.get('/api/newslist').then(res => {
        commit('GET_NEWS', res.data)
      })
    }
  },
  mutations: {
    // 获取文章
    [types.GET_BLOGS] (state, res) {
      state.blogList = res
      let list = state.blogList
      let arr = []
      // 获取标签
      for (let i = 0; i < list.length; i++) {
        arr.push(list[i].read)
        // 标签列表
        state.labelList.names.push({ name: list[i].label })
      }
    },
    // 获取新闻
    [types.GET_NEWS] (state, res) {
      state.newsList.names = res
    }
  }
})
