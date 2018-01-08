<template>
  <div class="time">{{times}}</div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      times: ''
    }
  },
  created () {
    this.times = moment().format('YYYY-MM-DD')
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.time {
  padding: 10%;
  color: $theme;
  text-align: center;
  font-size: 26px;
}
</style>
