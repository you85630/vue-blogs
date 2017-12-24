<template>
  <div class="news-info">
    <div class="intro">
      <div class="title">{{news.title}}</div>
      <p>
        <i class="fa fa-clock-o"></i>{{news.time}}</p>
      <p>
        <i class="fa fa-eye"></i>阅读（{{news.read}}）</p>
      <p>
        <router-link :to="{path:'newsList'}">
          <i class="fa fa-bookmark"></i>{{news.label}}</router-link>
      </p>
    </div>
    <div class="message">{{news.message}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      news: {}
    }
  },
  computed: {
    ...mapGetters([
      'newsList'
    ])
  },
  created () {
    this.news = this.newsList.names[this.$route.query.id]
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.news-info {
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
.message {
  font-size: 14px;
  margin: 2% 0;
  line-height: 1.5;
  text-indent: 2em;
}
</style>
