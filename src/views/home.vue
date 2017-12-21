<template>
  <div class="home">
    <div class="left">
      <new-blogs :list="blogList" :now="5"></new-blogs>
      <div class="blogs-more">
        <router-link to="/blogList">查看更多</router-link>
      </div>
    </div>
    <div class="right">
      <div class="list" v-for="li in newsList">
        <right-title :name="li.title"></right-title>
        <new-list :news="li.names"></new-list>
      </div>
      <div class="list" v-for="li in labellist">
        <right-title :name="li.title"></right-title>
        <my-lable :list="li.names"></my-lable>
      </div>
    </div>
  </div>
</template>

<script>
import newBlogs from 'components/modules/blogs'

import rightTitle from 'components/modules/rightTitle'
import myLable from 'components/modules/lables'
import newList from 'components/modules/newList'

import { mapGetters } from 'vuex'
export default {
  components: {
    newBlogs,
    rightTitle,
    myLable,
    newList
  },
  computed: {
    ...mapGetters([
      'blogList',
      'labellist',
      'newsList'
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
