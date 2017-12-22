<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="container">
      <router-view/>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import topNav from './components/common/topnav'
import myFooter from './components/common/footer'
export default {
  components: {
    topNav,
    myFooter
  },
  created () {
    this.$store.dispatch('getData')
  }

}
</script>

<style lang="scss" scoped>
#app {
  font-size: 0;

  user-select: none;
}
.container {
  padding: 20px;
  min-height: 78vh;
  background-color: #f9f9f9;
}
</style>
