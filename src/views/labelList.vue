<template>
  <div class="label-list">
    <my-lable :list="labellist.names"></my-lable>
  </div>
</template>

<script>
import myLable from 'components/modules/lables'
import { mapGetters } from 'vuex'
export default {
  components: {
    myLable
  },
  computed: {
    ...mapGetters([
      'labellist'
    ])
  }
}
</script>

<style lang="scss" scoped>
.label-list {
  background-color: #fff;
}
</style>
