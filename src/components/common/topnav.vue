<template>
  <div class="topnav">
    <div class="container">
      <dl>
        <dt>Yogi's
          <span>博客</span>
        </dt>
        <dd>
          <p>关注WEB前端技术</p>
          <p>学习如逆水行舟，不进则退</p>
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
export default {
  data () {
    return {
      topNav: [
        {
          name: '首页',
          link: '/home'
        }, {
          name: '列表',
          link: '/blogList'
        }, {
          name: '标签',
          link: '/labelList'
        }, {
          name: '关于我',
          link: '/aboutMe'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.topnav {
  border-bottom: 1px solid #eee;
  background-color: #fff;
  box-shadow: 0px 2px 5px #eee;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
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
