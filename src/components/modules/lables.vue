<template>
  <div class="labels">
    <p v-for="li in list">{{li.name}}</p>
  </div>
</template>

<script>
export default {
  props: [
    'list'
  ]
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.labels {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 0;
  p {
    overflow: hidden;
    margin-right: 5%;
    margin-bottom: 10px;
    padding: 4px 2%;
    width: 26%;
    background-color: #f9f9f9;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:hover {
      background-color: $theme;
      color: #fff;
    }
  }
}
</style>
