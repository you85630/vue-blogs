<template>
  <div class="home">
    <div class="left">
      <new-blogs :list="blogList" :now="5"></new-blogs>
      <div class="blogs-more">
        <router-link to="/blogList">查看更多</router-link>
      </div>
    </div>
    <div class="right">
      <div class="list">
        <right-title :name="timeNow.title"></right-title>
        <time-now></time-now>
      </div>
      <div class="list" v-if="likeNow.likes">
        <right-title :name="likeNow.title"></right-title>
        <like-now :like="likeNow.likes"></like-now>
      </div>
      <div class="list" v-if="newsList.names">
        <right-title :name="newsList.title"></right-title>
        <news-list :news="newsList.names"></news-list>
      </div>
      <div class="list" v-if="labellist.names">
        <right-title :name="labellist.title"></right-title>
        <my-lable :list="labellist.names"></my-lable>
      </div>
    </div>
  </div>
</template>

<script>
import newBlogs from 'components/modules/blogs'
import rightTitle from 'components/modules/rightTitle'
import myLable from 'components/modules/lables'
import newsList from 'components/modules/newsList'
import likeNow from 'components/modules/likeNow'
import timeNow from 'components/modules/timeNow'

import { mapGetters } from 'vuex'
export default {
  components: {
    newBlogs,
    rightTitle,
    myLable,
    newsList,
    likeNow,
    timeNow
  },
  computed: {
    ...mapGetters([
      'blogList',
      'labellist',
      'newsList',
      'likeNow',
      'timeNow'
    ])
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
$radius: 4px;
.home {
  display: flex;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  .left {
    margin-right: 2%;
    width: 72%;
  }
  .right {
    width: 26%;
  }
}
.blogs-more {
  margin-top: 20px;
  text-align: center;
  a {
    font-size: 20px;
    &:hover {
      color: $theme;
    }
  }
}
.list {
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: $radius;
  background-color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
