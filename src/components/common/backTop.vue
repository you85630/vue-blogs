<template>
  <div class="back-top" @click="back">
    <i class="fa fa-angle-up"></i>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.back-top {
  position: fixed;
  right: 2%;
  bottom: 20%;
  padding: 6px 10px;
  background-color: $theme;
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
}
</style>
