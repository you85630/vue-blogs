<template>
  <div class="blog-info">
    <div class="intro">
      <div class="title">{{blog.title}}</div>
      <p>
        <i class="fa fa-clock-o"></i>{{blog.time}}</p>
      <p>
        <i class="fa fa-eye"></i>阅读（{{blog.read}}）</p>
      <p>
        <router-link :to="{path:'blogList',query:{key:blog.label}}">
          <i class="fa fa-bookmark"></i>{{blog.label}}</router-link>
      </p>
    </div>
    <div class="message">{{blog.message}}</div>
    <div class="info" v-html="showMarkdown">{{blog.info}}</div>
  </div>
</template>

<script>
import marked from 'marked'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      blog: {}
    }
  },
  computed: {
    ...mapGetters([
      'blogList'
    ]),
    showMarkdown: function () {
      let info = marked(this.blog.info, { sanitize: true })
      return info
    }
  },
  created () {
    this.blog = this.blogList[this.$route.query.id]
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
  padding-bottom: 2%;
  border-bottom: 1px solid #eee;
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
