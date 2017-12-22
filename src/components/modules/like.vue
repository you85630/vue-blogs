<template>
  <div class="like">访问人数：{{like}}</div>
</template>

<script>
export default {
  props: ['like']
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.like {
  padding: 4%;
  font-size: 16px;
}
</style>
