<template>
  <div class="time">{{times|formatDate}}</div>
</template>

<script>
import { formatDate } from 'assets/js/date'
export default {
  data () {
    return {
      times: ''
    }
  },
  filters: {
    formatDate () {
      let date = new Date()
      return formatDate(date, 'yyyy-MM-dd')
    }
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
