<template>
  <div class="blog-list">
    <new-blogs :list="nowblogList" :show="blogList.length"></new-blogs>
  </div>
</template>

<script>
import newBlogs from 'components/modules/blogs'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      nowblogList: []
    }
  },
  components: {
    newBlogs
  },
  computed: {
    ...mapGetters([
      'blogList'
    ])
  },
  created () {
    let key = this.$route.query.key
    if (key) {
      let list = this.blogList
      let one = list.filter(e => e.label === key)
      this.nowblogList = one
    } else {
      this.nowblogList = this.blogList
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
}
</style>
