<template>
  <div class="blog-info">
    <div class="intro">
      <div class="title">{{li.title}}</div>
      <p>
        <i class="fa fa-clock-o"></i>{{li.time}}</p>
      <p>
        <i class="fa fa-eye"></i>阅读（{{li.read}}）</p>
      <p>
        <router-link :to="li.labellink">
          <i class="fa fa-bookmark"></i>{{li.label}}</router-link>
      </p>
    </div>
    <div class="message">{{li.message}}</div>
    <div class="info">{{li.info}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      li: {}
    }
  },
  computed: {
    ...mapGetters([
      'blogList'
    ])
  },
  created () {
    this.li = this.blogList[this.$route.query.id]
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.blog-info {
  padding: 4%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
}
.intro {
  text-align: center;
  .title {
    font-size: 30px;
    margin-bottom: 2%;
  }
  img {
    width: 100%;
    height: 100px;
  }
  p {
    display: inline-block;
    font-size: 14px;
    color: #999;
    margin: 0 2%;
    i {
      margin-right: 4px;
    }
    a {
      color: $theme;
    }
  }
}
.info,
.message {
  font-size: 14px;
  margin: 2% 0;
  line-height: 1.5;
  text-indent: 2em;
}
</style>
