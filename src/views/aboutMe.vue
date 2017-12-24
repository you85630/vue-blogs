<template>
  <div class="about-me">
    <div class="one">
      <p>About me?</p>
      <p>咳咳咳~~~</p>
      <p>那就说来话长了~</p>
      <p>容我慢慢道来~</p>
      <img src="./../assets/img/1.png" alt="">
      <p>严肃脸</p>
    </div>
    <div class="resume">
      <div class="cover">
        <p><img src="./../assets/img/cover.jpg" alt=""></p>
      </div>
      <p class="title">尤金金</p>
      <p>
        <span>
          <i class="fa fa-user-circle-o"></i>性别：</span>27岁的妹纸</p>
      <p>
        <span>
          <i class="fa fa-bank"></i>学历：</span>俺就是个大专</p>
      <p>
        <span>
          <i class="fa fa-envelope-o"></i>Email：</span>you85630@foxmail.com</p>
      <p>
        <span>
          <i class="fa fa-briefcase"></i>就职：</span>上海某互联网公司</p>
    </div>
    <div class="other">
      <p>~~~ end ~~~</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.about-me {
  padding: 4%;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
}
.one {
  text-align: center;
  p {
    margin-top: 4%;
    font-size: 14px;
    &:first-child {
      font-size: 20px;
      margin-top: 0;
    }
  }
  img {
    margin-top: 3%;
  }
}
.resume {
  margin: 0 auto;
  margin-top: 2%;
  padding: 1%;
  max-width: 50%;
  border: 1px solid $theme;
  font-size: 14px;
  text-align: center;
  .cover {
    position: relative;
    background-color: $theme;
    width: 100%;
    height: 10vw;
    margin-bottom: 6vw;
    p {
      width: 100%;
      text-align: center;
      position: absolute;
      top: 28%;
      img {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        border: 5px solid #fff;
        box-shadow: 0 1px 5px #ccc;
      }
    }
  }
  .title {
    font-size: 30px;
    color: #000;
    font-weight: normal;
  }
  p {
    margin-top: 2%;
    color: #666;
    span {
      color: #000;
    }
    i {
      margin-right: 1%;
    }
  }
}
.other {
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 2%;
  }
}
</style>
