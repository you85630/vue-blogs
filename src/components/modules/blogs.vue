<template>
  <div class="blogs">
    <dl v-for="(li,index) in list" :key="li.index" v-if="index<show">
      <dt>
        <router-link :to="{path:'blogInfo',query:{id:index}}"><img :src="li.cover" :alt="li.title"></router-link>
      </dt>
      <dd>
        <div class="title">
          <router-link :to="{path:'blogInfo',query:{id:index}}">{{li.title}}</router-link>
        </div>
        <div class="other">
          <p>
            <i class="fa fa-clock-o"></i>{{li.time}}</p>
          <p>
            <i class="fa fa-eye"></i>阅读（{{li.read}}）</p>
          <p>
            <router-link :to="li.labellink">
              <i class="fa fa-bookmark"></i>{{li.label}}</router-link>
          </p>
        </div>
        <div class="info">{{li.message}}</div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: [
    'list',
    'show'
  ]
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.blogs {
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
  dl {
    display: flex;
    padding: 2%;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: #f9f9f9;
    }
    dt {
      overflow: hidden;
      margin-right: 2%;
      width: 28%;
      height: 18vh;
      background-color: #fff;
      text-align: center;
      img {
        width: auto;
        height: 100%;
      }
    }
    dd {
      width: 70%;
      .title {
        font-size: 18px;
        a {
          &:hover {
            color: $theme;
          }
        }
      }
      .other,
      .info {
        margin-top: 10px;
        color: #999;
        font-size: 12px;
      }
      .other {
        display: flex;
        p {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
          i {
            margin-right: 4px;
          }
          a {
            color: $theme;
          }
        }
      }
      .info {
        overflow: hidden;
        height: 86px;
        line-height: 1.5;
      }
    }
  }
}
</style>
