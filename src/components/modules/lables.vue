<template>
  <div class="labels">
    <p v-for="(li,index) in nowList" v-if="index<show">
      <router-link :to="{path:'blogList',query:{key:li.name}}">
        {{li.name}}
        <span>（{{li.len}}）</span>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nowList: []
    }
  },
  props: [
    'list',
    'show'
  ],
  created () {
    // 计算个数
    let arr = []
    let result = this.list
    result.sort()
    for (let i = 0; i < result.length;) {
      let count = 0
      for (let j = i; j < result.length; j++) {
        if (result[i].name === result[j].name) {
          count++
        }
      }
      arr.push({
        name: result[i].name,
        len: count
      })
      i += count
    }

    let list = []
    for (let k = 0; k < arr.length; k++) {
      list.push(arr[k])
    }
    this.nowList = list
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
