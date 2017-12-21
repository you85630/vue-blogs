<template>
  <ul class="news-list">
    <li v-for="li in news">
      <router-link :to="li.link">
        {{li.name}}
      </router-link>
      <span>{{li.time}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'news'
  ]
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.news-list {
  padding: 10px;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      font-size: 12px;
      &:hover {
        color: $theme;
      }
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
}
</style>
