<template>
  <div class="like-now">
    <p class="like">{{like}}</p>
    <p class="time">{{times}}</p>
  </div>
</template>

<script>
export default {
  props: ['like'],
  data () {
    return {
      times: '11'
    }
  },
  created () {
    let myDate = this.moment().format('YYYY-MM-DD')
    this.times = myDate
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.like-now {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .like {
    font-size: 16px;
  }
  .time {
    color: $theme;
    font-size: 30px;
  }
}
</style>
