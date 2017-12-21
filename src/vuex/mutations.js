import * as types from './types'

export default {
  // 获取数据
  [types.GET_DATA] (state, res) {
    // 顶部导航
    state.topNav = res
  }
}
