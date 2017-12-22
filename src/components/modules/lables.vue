<template>
  <div class="labels">
    <p v-for="li in list">
      <router-link to="/">
        {{li.name}}
      </router-link>
    </p>
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
  padding: 4%;
  padding-bottom: 0;
  justify-content: space-around;
  p {
    overflow: hidden;
    margin: 0 2%;
    margin-bottom: 4%;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    a {
      display: block;
      background-color: #f9f9f9;
      color: #999;
      padding: 2px 10px;
      &:hover {
        background-color: $theme;
        color: #fff;
      }
    }
  }
}
</style>
