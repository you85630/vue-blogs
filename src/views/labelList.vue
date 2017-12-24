<template>
  <div class="label-list">
    <my-lable :list="labelList.names" :show="labelList.names.length"></my-lable>
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
      'labelList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.label-list {
  border: 1px solid #eee;
  border-radius: 4px;
}
</style>
