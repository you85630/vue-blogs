import * as types from './types'

export default {
  // 获取文章
  [types.GET_BLOGS] (state, res) {
    let list = state.blogList
    let arr = []
    // 获取标签
    let like = 0
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i].read)
      // 标签列表
      state.labelList.names.push({ name: list[i].label })
    }
    arr.forEach(e => {
      let i = parseInt(e)
      like += i
    })
    // 观光者总人数
    state.likeNow.likes += like
  },
  // 获取新闻
  [types.GET_NEWS] (state, res) {
    state.newsList = res
  }
}
