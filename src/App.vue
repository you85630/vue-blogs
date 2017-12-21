<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
  </div>
</template>

<script>
import topNav from './components/common/topnav'
export default {
  components: {
    topNav
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
</style>
