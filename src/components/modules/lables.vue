<template>
  <div class="labels">
    <p v-for="(li,index) in list" v-if="index<show">
      <router-link :to="li.link">
        {{li.name}}
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    'list',
    'show'
  ]
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.labels {
  padding: 4%;
  background-color: #fff;
  p {
    margin: 1% 2%;
    display: inline-block;
    a {
      font-size: 12px;
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
