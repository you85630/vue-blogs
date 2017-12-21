<template>
  <div class="right-title">
    {{name}}
  </div>
</template>

<script>
export default {
  props: [
    'name'
  ]

}
</script>

<style lang="scss" scoped>
.right-title {
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: #fbfbfb;
  font-size: 16px;
}
</style>
