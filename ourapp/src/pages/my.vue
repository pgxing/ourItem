<template >
  <div class="body">
    <div class="top">
      <section class="top_1">
        <div class="top_1l" @click="jumpInfor">
          <img src="../img/timg.jpg" alt>
          <article>
            <h4>jonathan</h4>
            <h5>ID: 467346789246826478</h5>
          </article>
        </div>
        <div class="top_1r">
          <p><i class="iconfont icon-erweima"></i></p>
        
          <h6>邀请码</h6>
        </div>
      </section>
      <section class="top_2">
        <div @click="turn1()">
          <figure>0</figure>
          <aside>果币</aside>
        </div>
        <div @click="turn2()">
          <figure>0</figure>
          <aside>优惠券</aside>
        </div>
        <div @click="turn3()">
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
          <span @click="to()">全部订单></span>
        </div>
        <div class="middle_1cb">
          <div @click="jump1()">
            <section><i class="iconfont icon-daifukuan"></i></section>
            <p>待付款</p>
          </div>
          <div @click="jump2()">
            <section><i class="iconfont icon-yifukuan"></i></section>
            <p>已付款</p>
          </div>
          <div @click="jump3()">
            <section><i class="iconfont icon-daifahuo"></i></section>
            <p>待发货</p>
          </div>
          <div @click="jump4()">
            <section><i class="iconfont icon-daishouhuo"></i></section>
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
          <section><i class="iconfont icon-lvsefenkaicankaoxianban-"></i></section>
          <p>我的团长</p>
        </div>
        <div @click="go2()">
          <section><i class="iconfont icon-wodedangxuan"></i></section>
          <p>收货人</p>
        </div>
        <div @click="go3()">
          <section><i class="iconfont icon-iconset03100"></i></section>
          <p>申请团长</p>
        </div>
        <div @click="go4()">
          <section><i class="iconfont icon-qingchu"></i></section>
          <p>清除缓存</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>购买的商品有任何问题，请联系团长处理售后问题。如果联系不到所属团长，请直接联系知花知果客服热线！</p>
      <span>18108293702📞</span>
    </div>
    <router-view></router-view>
    <router-view name="Information"></router-view>

  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  methods: {
    jumpInfor(){
      this.$router.push({path:'/My/information'})
    },
    jump1(){
      this.$router.push({path:'/my/waitingPay'})
      },
    to() {
      this.$router.push({ path: "/orders" });
    },
    turn1() {
      this.$router.push({ path: "/my/coin" });
    },
    turn2() {
      this.$router.push({ path: "/coupon" });
    },
    turn3() {
      this.$router.push({ path: "/my/fans" });
    },
    jump1() {
      this.$router.push({ path: "/orders" });
    },
    jump2() {
      this.$router.push({ path: "/orders" });
    },
    jump3() {
      this.$router.push({ path: "/orders" });
    },
    jump4() {
      this.$router.push({ path: "/orders" });
    },
    go1() {
      this.$router.push({ path: "/my/myTeam" });
    },
    go2() {
      this.$router.push({ path: "/my/addressee" });
    },
    go3() {
      this.$router.push({ path: "/my/commander" });
    },
    go4() {
      this.$messagebox({
        title: "温馨提示",
        message: "确定要清除缓存吗？",
        showCancelButton: true,
        // confirmButtonText: "确定",
        // cancelButtonText: "取消"
      });
    }
  }
};
</script>

<style lang='less'>
@import "../../iconfont1111/iconfont.css";
@import "../../iconfont/iconfont.css";
@import "../common/style/index.less";
.body {
  height: 100%;
  position: relative;
}
.top {
  .w(375);
  .h(164);
  /* height:195px; */
  background: #A1C729;
}
.top_1 {
  .h(62);
}
.top_1l {
  float: left;
  .w(300);
  .h(62);
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_1r p {
  .f_s(15);
  color: #fff;
}
.top_1r p i{
  .f_s(38);
}
.top_1r h6 {
  .f_s(15);
  color: #fff;
  line-height: 20px;
  
  opacity: 0.8;
}
.top_2 {
  .w(375);
  .h(102);
  display: flex;
  align-items: center;
  color: #fff;
}
.top_2 div {
  flex: 1;
  .w(70);
  .h(80);
}
.top_2 div figure {
  .f_s(20);
  text-align: center;
}
.top_2 div aside {
  .f_s(16);
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
.middle_1ct {
  .w(340);
  .h(50);
  .margin(0, 0, 0, 8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(154, 154, 154, 0.1);
}
.middle_1ct span:nth-child(1) {
  .f_s(18);
  font-weight: 600;
}
.middle_1ct span:nth-child(2) {
  .f_s(16);
  color: #a8a8a8;
}
.middle_1cb {
  .w(355);
  .h(97);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.middle_1cb div {
  .w(60);
  .h(80);
  text-align: center;
}
.middle_1cb section {
  .f_s(15);
  color:#91BE21;
}
.middle_1cb section i{
  .f_s(38);
}
.middle_1cb p {
  .f_s(14);
}
/*其他服务*/
.middle_2 {
  .w(375);
  .h(135);
  background: #fff;
  .padding(12, 0, 0, 0);
}
.middle_2 h3 {
  .f_s(18);
  font-weight: 600;
}
.middle_2c {
  .w(375);
  .h(110);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.middle_2c section {
  display: flex;
  flex-direction: column;
  align-items: center;
   color:#91BE21;
}
.middle_2c section i{
  .f_s(38);
}
.middle_2c p {
  .f_s(14);
}
/*bottom*/
.bottom {
  .w(375);
  .h(182);
  background: #f7f6f6;
}
.bottom p {
  .f_s(14);
  color:#B4B4B4;
}
.bottom span{
  color:red;
  .f_s(12);
}
</style>
