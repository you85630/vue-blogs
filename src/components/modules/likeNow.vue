<template>
  <div class="like-now">{{like}}</div>
</template>

<script>
export default {
  props: ['like']
}
</script>

<style lang="scss" scoped>
.like-now {
  padding: 10px;
  font-size: 12px;
}
</style>
