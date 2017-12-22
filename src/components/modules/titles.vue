<template>
  <div class="titles">
    <span>{{name}}</span>
    <router-link :to="tomore" v-if="tomore">more&nbsp;&gt;</router-link>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'tomore'
  ]

}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.titles {
  padding: 4%;
  line-height: 1;
  border-bottom: 1px solid #eee;
  background-color: #fbfbfb;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
  }
  a {
    color: $theme;
    font-size: 12px;
  }
}
</style>
