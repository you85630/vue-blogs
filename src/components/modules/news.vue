<template>
  <ul class="news">
    <li v-for="(li,index) in news" v-if="index<show">
      <router-link :to="{path:'newsInfo',query:{id:index}}">
        {{li.title}}
      </router-link>
      <span>{{li.time}}</span>
    </li>
    <data-none v-if="!news.length"></data-none>
  </ul>
</template>

<script>
import dataNone from 'components/common/dataNone'
export default {
  props: [
    'news',
    'show'
  ],
  components: {
    dataNone
  },
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.news {
  padding: 4%;
  background-color: #fff;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4%;
    line-height: 1;
    &:last-child {
      margin-bottom: 0;
    }
    a {
      overflow: hidden;
      width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
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
