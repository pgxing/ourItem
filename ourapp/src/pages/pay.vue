<template>
  <div class="pay">
    <header>
      <span @click="back">《</span>
      <div>确认订单</div>
    </header>
    <div class="content">
      <div class="box">
        <div class="userinfo">
            <div class="user" 
              @click="toadduser"
            ><span>收货人：</span><span>》</span></div>
            <div class="addess"><span>提货地址：</span><span>》</span></div>
        </div>
        <ul>
          <li class="foodinfo">商品信息</li>
          <li v-for="(item,index) in list" :key="index">
            <div class="img">
              <img :src="item.src" alt>
            </div>
            <div class="title">
              <h3>{{item.titie}}</h3>
              <p>{{item.price}}x{{item.id}}</p>
              <div class="arrive">
                <b>预计:</b>7月5日18:00到货
              </div>
            </div>
            <div class="price">￥{{comprice(item.price,item.id)}}</div>
          </li>
          <li class="topbom">
            <div class="top">
                <span>商品金额</span>
                <b>￥{{this.$route.query.allprice}}</b>
            </div>
            <div class="bom">应付<b>￥{{this.$route.query.allprice}}</b></div>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <span>￥{{this.$route.query.allprice}}</span>
      <div>去支付</div>
    </footer>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      list: [],
      usersInfo : []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    initBS() {
      this.scroll = new BS(".content", { click: true, probeType: 3 });
    },
    comprice(price, id) {
      return Math.floor(price.slice(1) * id * 100) / 100;
    },
    toadduser(){
      this.$router.push('')
    }
  },
  mounted() {
    //从localStorage中获取收货人信息
    if(localStorage.users){
      let usersInfo = JSON.parse(localStorage.getItem('user'))
      this.usersInfo = usersInfo
    }
    this.list = this.$route.query.buylist;
    console.log(this.list);
    this.initBS();
  }
};
</script>
<style lang="less" socped>
@import "~style/index.less";
.pay {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 5;
  background: skyblue;
  .w(375);
  header {
    .h(44);
    .w(375);
    background: #99bb42;
    display: flex;
    .f_s(18);
    color: #fff;
    span {
      .h(44);
      .l_h(44);
      display: block;
      text-align: center;
    }
    div {
      .h(44);
      .l_h(44);
      flex: 1;
      text-align: center;
    }
  }
  .content {
    position: fixed;
    .h(579);
    .w(375);
    background: #fff;
    overflow: hidden;
    .box {
      background: #f6f6f6;
      .padding(10, 12, 10, 12);
      .userinfo {
        .w(351);
        background: #fff;
        .f_s(16);
        .user{
            display: flex;
            justify-content: space-between;
            .padding(10, 12, 10, 12);
            .h(47);
            .w(351);
            background: skyblue;
            .l_h(27);
        }
        .addess{
            display: flex;
            justify-content: space-between;
            .padding(10, 12, 10, 12);
            .h(70);
            .w(351);
            .l_h(50);
            border-top: 1px solid #f6f6f6;
            background: yellow;
        }
      }
      ul {
        margin-top: 10px;
        background: #fff;
        .padding(10, 12, 10, 12);
        .foodinfo {
          .w(327);
          .h(47);
          border-bottom: 2px solid #f6f6f6;
          .f_s(18);
          font-weight: 900;
          .l_h(47);
        }
        li {
          .h(96);
          .w(327);
          .f_s(14);
          .padding(10, 0, 10, 12);
          display: flex;
          justify-content: space-between;
          .img {
            .w(57);
            .h(72);
            img {
              display: block;
              .w(45);
              .h(45);
            }
          }
          .title {
            .w(235);
            .h(72);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .arrive {
              .w(145);
              .h(20);
              background: #f6f6f6;
              border-radius: 10px;
              color: #707070;
              b {
                color: #99bb42;
              }
            }
          }
          .price {
            .w(47);
            .h(72);
            .l_h(72);
            text-align: center;
            font-weight: 900;
          }
        }
        .topbom {
            display: block;
            padding: 0;
          .top {
            .h(46);
            .w(327);
            border: 1px solid #f6f6f6;
            border-width: 1px 0 1px 0;
            display: flex;
            justify-content: space-between;
            background: #fff;
            .l_h(46);
            b{
                color: red;
            }
          }
          .bom {
            .h(48);
            .w(327);
            .l_h(48);
            text-align: right;
            .f_s(16);
            b{
                color: red;
            }
          }
        }
      }
    }
  }
  footer {
    .w(375);
    .h(44);
    background: #fff;
    //   position: absolute;
    position: fixed;
    z-index: 6;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    span {
      .w(80);
      .h(44);
      color: red;
      .f_s(20);
      text-align: center;
      .l_h(44);
      .padding(0, 0, 0, 10);
    }
    div {
      display: block;
      .w(90);
      .h(44);
      color: #fff;
      background: #99bb42;
      text-align: center;
      .f_s(16);
      .l_h(44);
    }
  }
}
</style>


