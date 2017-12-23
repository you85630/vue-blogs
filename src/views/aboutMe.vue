<template>
  <div class="about-me">
    <div class="one">
      <h2>About me?</h2>
      <p>咳咳咳~~~</p>
      <p>那就说来话长了~</p>
      <p>容我慢慢道来~</p>
      <img src="./../assets/img/1.png" alt="">
      <p>严肃脸</p>
    </div>
    <div class="two">
      <p>很久很久以前，我还是个学生</p>
      <p>然后去学了计算机</p>
      <p>然后毕业就上班了</p>
      <p>之后的就别看了吧！</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>别这么坚持好么~</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>。</p>
      <p>好吧，既然你坚持的话~</p>
      <p>
        <button @click="show" v-if="!truth">查看真相</button>
      </p>
    </div>
    <div class="three" v-if="truth">
      <p>90后妹子~~</p>
      <p>现在已经被00后称为阿姨的美少女~！😢</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      truth: false
    }
  },
  methods: {
    show () {
      this.truth = true
    }
  }
}
</script>

<style lang="scss" scoped>
$theme: #9cc;
.about-me {
  padding: 2%;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  p {
    margin-top: 4%;
    font-size: 14px;
  }
  h2 {
    font-size: 20px;
  }
  button {
    padding: 1% 4%;
    border: none;
    border-radius: 4px;
    background-color: $theme;
    line-height: 1;
  }
}
.one {
  img {
    margin-top: 3%;
    margin-bottom: -3%;
  }
}
</style>
