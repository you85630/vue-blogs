<template>
  <div class="news-list">{{newsList}}
    <news-list :news="newsList.names" :show="newsList.names.length"></news-list>
  </div>
</template>

<script>
import newsList from 'components/modules/news'
import { mapGetters } from 'vuex'
export default {
  components: {
    newsList
  },
  computed: {
    ...mapGetters([
      'newsList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
