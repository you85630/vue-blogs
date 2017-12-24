<template>
  <div class="labels">
    <p v-for="(li,index) in nowList" v-if="index<show">
      <router-link :to="{path:'blogList',query:{key:li.name}}">
        {{li.name}}（{{len.count}}）
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      len: '',
      nowList: []
    }
  },
  props: [
    'list',
    'show'
  ],
  created () {
    let list = this.list
    let arr = []
    for (var i = 0; i < list.length;) {
      var count = 0
      for (var j = i; j < list.length; j++) {
        if (list[i].name === list[j].name) {
          count++
        }
      }
      arr.push({
        count: count
      })
      i += count
    }
    for (var k = 0; k < arr.length; k++) {
      this.len = arr[k]
    }
    // 去重
    let nowlist = []
    let set = new Set()
    list.forEach((tab) => {
      if (!set.has(tab.name)) {
        nowlist.push(tab)
        set.add(tab.name)
      }
    })
    this.nowList = nowlist
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.labels {
  padding: 4%;
  background-color: #fff;
  p {
    margin: 1% 2%;
    display: inline-block;
    a {
      font-size: 14px;
      display: block;
      background-color: #f9f9f9;
      padding: 2px 10px;
      &:hover {
        background-color: $theme;
        color: #fff;
      }
    }
  }
}
</style>
