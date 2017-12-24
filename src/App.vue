<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="container">
      <router-view/>
      <back-top></back-top>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import topNav from 'components/common/topnav'
import myFooter from 'components/common/footer'
import backTop from 'components/common/backTop'
export default {
  components: {
    topNav,
    myFooter,
    backTop
  },
  created () {
    // 获取文章
    this.$store.dispatch('getBlogs')
    // 获取公告
    this.$store.dispatch('getNews')
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  font-size: 0;

  user-select: none;
}
.container {
  margin: 0 auto;
  padding: 20px;
  min-height: 78vh;
  max-width: 1200px;
}
</style>
