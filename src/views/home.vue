<template>
  <div class="home">
    <div class="left">
      <my-blogs :list="blogList" :show="5"></my-blogs>
      <div class="blogs-more">
        <router-link to="/blogList">查看更多</router-link>
      </div>
    </div>
    <div class="right">
      <div class="list" v-if="likeNow.likes">
        <my-title :name="likeNow.title"></my-title>
        <my-like :like="likeNow.likes"></my-like>
      </div>
      <div class="list">
        <my-title :name="timeNow.title"></my-title>
        <my-time></my-time>
      </div>
      <div class="list" v-if="newsList.names">
        <my-title :name="newsList.title" :tomore="newsList.more"></my-title>
        <my-news :news="newsList.names" :show="5"></my-news>
      </div>
      <div class="list" v-if="labelList.names">
        <my-title :name="labelList.title" :tomore="labelList.more"></my-title>
        <my-lable :list="labelList.names" :show="10"></my-lable>
      </div>
    </div>
  </div>
</template>

<script>
import myBlogs from 'components/modules/blogs'
import myTitle from 'components/modules/titles'
import myLable from 'components/modules/lables'
import myNews from 'components/modules/news'
import myLike from 'components/modules/like'
import myTime from 'components/modules/time'

import { mapGetters } from 'vuex'
export default {
  components: {
    myBlogs,
    myTitle,
    myLable,
    myNews,
    myLike,
    myTime
  },
  computed: {
    ...mapGetters([
      'blogList',
      'labelList',
      'newsList',
      'likeNow',
      'timeNow'
    ])
  },
  created () {
    // 获取文章
    this.$store.dispatch('getBlogs')
    // 获取公告
    this.$store.dispatch('getNews')
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.home {
  display: flex;
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
  border-radius: 4px;
  background-color: #fff;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
