<template>
  <div class="footer">
    <div class="container">
      &copy;
      <span>{{time}}</span>Yogi-尤金金关注web前端技术
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: ''
    }
  },
  created () {
    let now = new Date().getFullYear()
    this.time = now
  }

}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #eee;
  background-color: #fff;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  .container {
    padding: 40px 0;
    text-align: center;
    font-size: 12px;
    color: #999;
    span {
      margin-right: 4px;
    }
  }
}
</style>
