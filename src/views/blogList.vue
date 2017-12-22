<template>
  <div class="blog-list">
    <new-blogs :list="blogList" :show="blogList.length"></new-blogs>
  </div>
</template>

<script>
import newBlogs from 'components/modules/blogs'
import { mapGetters } from 'vuex'
export default {
  components: {
    newBlogs
  },
  computed: {
    ...mapGetters([
      'blogList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
}
</style>
