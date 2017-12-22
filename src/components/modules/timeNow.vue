<template>
  <div class="time-now">{{times|formatDate}}</div>
</template>

<script>
import { formatDate } from 'assets/js/date'
export default {
  data () {
    return {
      times: '11'
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
.time-now {
  padding: 20% 10%;
  color: $theme;
  font-size: 26px;
  text-align: center;
}
</style>
