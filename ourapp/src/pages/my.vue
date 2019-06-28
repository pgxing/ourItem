<template >
  <div class="body">
    <div class="top">
      <section class="top_1">
        <div class="top_1l">
          <img src="../img/timg.jpg" alt>
          <article>
            <h4>jonathan</h4>
            <h5>ID: 467346789246826478</h5>
          </article>
        </div>
        <div class="top_1r">
          <p>二维码</p>
          
          <h6>邀请码</h6>
        </div>
      </section>
      <section class="top_2">
        <div>
          <figure>0</figure>
          <aside>果币</aside>
        </div>
        <div>
          <figure>0</figure>
          <aside>优惠券</aside>
        </div>
        <div>
          <figure>0</figure>
          <aside>粉丝</aside>
        </div>
      </section>
    </div>
    <!--我的订单-->
    <div class="middle_1">
      <div class="middle_1c">
          <div class="middle_1ct">
              <span>我的订单</span>
              <span>全部订单></span>
          </div>
          <div class="middle_1cb">
              <div @click="jump1()">
                  <section>icon</section>
                  <p>待付款</p>
              </div>
              <div @click="jump2()">
                  <section>icon</section>
                  <p>已付款</p>
              </div>
              <div @click="jump3()">
                  <section>icon</section>
                  <p>待发货</p>
              </div>
              <div @click="jump4()">
                  <section>icon</section>
                  <p>待收货</p>
              </div>
          </div>
      </div>
    </div>
    <!--其他服务-->
    <div class="middle_2">
        <h3>其他服务</h3>
        <div class="middle_2c">
              <div @click="go1()">
                  <section>icon</section>
                  <p>我的团长</p>
              </div>
              <div @click="go2()">
                  <section>icon</section>
                  <p>收货人</p>
              </div>
              <div @click="go3()">
                  <section>icon</section>
                  <p>申请团长</p>
              </div>
              <div @click="go4()">
                  <section>icon</section>
                  <p>清除缓存</p>
              </div>
          </div>
    </div>
    <div class="bottom">
        <p>购买的商品有任何问题，请联系团长处理售后问题。如果联系不到所属团长，请直接联系知花知果客服热线！</p>
        <span>18108293702</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jump1(){
      this.$router.push({path:'/my/waitingPay'})
    },
    jump2(){
      this.$router.push({path:'/my/alreadyPay'})
    },
    jump3(){
      this.$router.push({path:'/my/waitingGet'})
    },
    jump4(){
      this.$router.push({path:'/my/alreadyGet'})
    },
    go1(){
      this.$router.push({path:'/my/myTeam'})
    },
    go2(){
      this.$router.push({path:'/my/addressee'})
    },
    go3(){
      this.$router.push({path:'/my/commander'})
    },
    go4(){
      this.$router.push({path:'/my/clearCache'})
    },
  },
}
</script>

<style lang='less'>
@import "../common/style/index.less";
.body {
  height: 100%;
}
.top {
  .w(375);
  .h(164);
  /* height:195px; */
  background: #a1c729;
}
.top_1 {
  .h(62);
  background: red;
}
.top_1l {
  float: left;
  .w(300);
  .h(62);
  background: brown;
}
.top_1l img {
  .w(60);
  .h(60);
  float: left;
  border-radius: 30px;
  .margin(0, 0, 0, 12);
}
.top_1l article {
  float: left;
  .margin(0, 0, 0, 6);
  .h(62);
  .w(220);
}
.top_1l article h4 {
  .margin(10, 0, 0, 0);
  .f_s(18);
  font-weight: 700;
  color: #fff;
}
.top_1l article h5 {
  .margin(8, 0, 0, 0);
  .f_s(15);
  color: #fff;
  opacity: 0.8;
}
.top_1r {
  float: left;
}
.top_1r p {
  .f_s(15);
  color: #fff;

}
.top_1r h6 {
  .f_s(15);
  color: #fff;
  .margin(16, 0, 0, 12);
  opacity: 0.8;
}
.top_2 {
  .w(375);
  .h(102);
  background: pink;
  display: flex;
  align-items: center;
}
.top_2 div {
  flex: 1;
  .w(70);
  .h(80);
}
.top_2 div figure {
  .f_s(30);
  text-align: center;
}
.top_2 div aside {
  .f_s(20);
  text-align: center;
}

/*我的订单*/
.middle_1 {
  .w(375);
  .h(147);
  background: #f7f6f6;
  position: relative;
}
.middle_1c {
  .w(355);
  .h(147);
  background: #fff;
  .margin(0, 0, 0, 10);
  border-radius: 15px;
  position: absolute;
  .top(-20);
}
.middle_1ct{
    .w(340);
    .h(50);
    .margin(0,0,0,8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid rgba(154,154,154,0.1);
}
.middle_1ct span:nth-child(1){
    .f_s(18);
    font-weight: 600;
}
.middle_1ct span:nth-child(2){
    .f_s(16);
    color:#A8A8A8;
}
.middle_1cb{
    .w(355);
    .h(97);
    background:green;
     display:flex;
     align-items: center;
     justify-content: space-around;
}
.middle_1cb div{
    .w(60);
    .h(80);
    background:pink;
    text-align: center;
   
}
.middle_1cb section{
    .f_s(15);
}
.middle_1cb p{
    .f_s(16);
}
/*其他服务*/
.middle_2 {
  .w(375);
  .h(135);
  background: #fff;
    .padding(12,0,0,0);
}
.middle_2 h3{
      .f_s(18);
    font-weight: 600;
}
.middle_2c{
    .w(375);
    .h(110);
    display:flex;
       align-items: center;
     justify-content: space-around;
    background:blueviolet;
}
.middle_2c section{
    .f_s(15);
}
.middle_2c p{
    .f_s(16);
}
/*bottom*/
.bottom {
  .w(375);
  .h(182);
  background: #f7f6f6;
}
.bottom p{
    .f_s(14);
}
</style>
