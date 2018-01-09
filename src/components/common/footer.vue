<template>
  <div class="footer">
    <div class="container">
      &copy;
      <span>{{time}}</span>关注web前端技术
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
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
    font-size: 12px;
    color: #999;
    span {
      margin-right: 4px;
    }
  }
}
</style>
