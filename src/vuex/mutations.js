import * as types from './types'

export default {
  // 获取数据
  [types.GET_DATA] (state, res) {
    let list = state.blogList
    let arr = []
    let like = 0
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i].read)
    }
    arr.forEach(e => {
      let i = parseInt(e)
      like += i
    })
    state.likeNow.likes += like
  }
}
