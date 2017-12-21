<template>
  <div class="topnav">
    <div class="topnav-main">
      <dl>
        <dt>名字
          <span>博客</span>
        </dt>
        <dd>
          <p>这里是说明</p>
          <p>这里是说明</p>
        </dd>
      </dl>
      <ul>
        <li v-for="li in topNav">
          <router-link :to="li.link">{{li.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'topNav'
    ])
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.topnav {
  box-shadow: 0px 2px 5px #eee;
  background-color: #fff;
}
.topnav-main {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
dl {
  display: flex;
  justify-content: flex-end;
  dt {
    color: $theme;
    font-size: 32px;
    line-height: 1;
    span {
      font-size: 18px;
    }
  }
  dd {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #999;
    p {
      margin-top: 10px;
      color: #999;
      font-size: 14px;
      line-height: 1;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
ul {
  display: flex;
  align-items: flex-end;
  li {
    margin-right: 50px;
    padding: 30px 0;
    &:last-child {
      margin-right: 0;
    }
    a {
      font-size: 16px;
    }
    .router-link-exact-active,
    .router-link-active {
      color: $theme;
      font-size: 18px;
    }
  }
}
</style>
