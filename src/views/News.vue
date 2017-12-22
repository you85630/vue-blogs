<template>
  <div class="news">{{newsList}}
    <news-list :news="newsList.names" :show="newsList.names.length"></news-list>
  </div>
</template>

<script>
import newsList from 'components/modules/newsList'
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
.news {
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
