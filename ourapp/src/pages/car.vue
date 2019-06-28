<template>
  <div class="car">
    <div class="car-top">
      <div class="leftDiv">
        <span>共件商品</span>
      </div>
      <div class="rightDiv">
        <span>清理失效商品</span>
        <span @click="change" ref="name">编辑</span>
      </div>
    </div>
    <div class="carList">
      <ul class="shopList">
        <li class="list" v-for="(item,index) in list" :key="index">
          <div class="img">
            <div>
              <input type="checkbox">
            </div>
            <img :src="item.src" alt>
          </div>
          <div class="describe">
            <div class="dec">
              <span>{{item.titie}}</span>
              <span>规格 1份</span>
            </div>
            <div class="price">
              <div>
                <h1>{{item.price}}</h1>
              </div>
              <div class="btn">
                <button class="jian">-</button>
                <span>{{item.id}}</span>
                <button class="add">+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car-foot">
      <div class="leftDiv">
        <span>全选</span>
      </div>
      <div class="rightDiv">
        <span>合计</span>
        <button>未选购</button>
      </div>
    </div>
    <div class='carList'>
    <ul class="shopList">
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
      <li class="list">
        <div class="img">
          <img src="../assets/1_03.png" alt>
        </div>
        <div class="describe">
          <div class="dec">
            <span>【新人专享】水果试吃装 1份</span>
            <span>规格 1份</span>
          </div>
          <div class="price">
            <div>
              <h1>￥</h1>
            </div>
            <div class="btn">
              <button class="jian">-</button>
              <button class="add">+</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>

import Bs from "better-scroll";
console.log(Bs)
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    change() {
      console.log(this);
    }
  },
  mounted() {
    let list = JSON.parse(localStorage.getItem("info"));
    console.log();
    this.list = list;
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
//去掉单选框原有的样式
input, button{
  -webkit-appearance: none;
}
.car-top {
  display: flex;
  justify-content: space-between;
  .h(44);
  .w(375);
  background: @bg-color-blue;
  .f_s(12);
  color: @font-color-white;
  .rightDiv {
    display: flex;
    span {
      display: block;
      .margin(10, 10, 10, 10);
    }
  }
  .leftDiv {
    span {
      display: block;
      .margin(10, 10, 10, 10);
    }
  }
}
.carList {
  position: fixed;
  .top(88);
  .bottom(94);
  overflow: hidden;
  .list {
    background: #fff;
    display: flex;
    .h(97);
    .w(375);
    .describe {
      .w(248);
      .price {
        .margin(0, 0, 0, 13);
        display: flex;
        justify-content: space-between;
        color: red;
        .h(28);
        .l_h(28);
        .btn {
          display: flex;
          span{
            .f_s(14);
            .h(25);
            .l_h(25);
            text-align: center
          }
          button {
            // .l_h(28);
            .w(25);
            .h(25);
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 25px;
            .l_h(25);
            .margin(0,10,0,10) 
          }
          .jian{
            .f_s(18);
            color: #99bb42;
            .l_h(23);
          }
          .add{
            .f_s(18);
            color: #fff;
            background: #99bb42
          }
        }
      }
      .dec {
        .margin(18, 50, 0, 16);
        span {
          color: #333;
          .f_s(12);
          display: block;
          .h(20);
          .l_h(20);
        }
      }
    }
    .img {
      display: flex;
      div{
        .w(50);
        .h(77);
        display: flex;
        justify-content: center;
        align-items: center;
        input{
          .w(25);
          .h(25);
          border: 1px solid #ddd;
          border-radius: 14px;
          &:checked{
            background: #99bb42 url('/first/check.jpg') no-repeat center center;
            background-size: 15px 12px;
            border: 1px solid #99bb42;
          }
        }
      }
      .margin(13, 0, 13,0);
      img {
        .h(77);
        .w(77);
      }
    }
  }
}

.car-foot {
  position: fixed;
  z-index:1;
  .bottom(44);
  .h(50);
  .w(375);
  background: @bg-color-white;
  .f_s(14);
  justify-content: space-between;
  display: flex;
  .leftDiv {
    span {
      display: block;
      .margin(15, 15, 15, 15);
      color: #333;
    }
  }
  .rightDiv {
    display: flex;
    span {
      display: block;
      .margin(15, 30, 15, 30);
      color: #333;
    }
    button {
      .h(50);
      .w(105);
      background: #ccc;
    }
  }
}

.carList {
  position: fixed;
  .top(88);
  .bottom(94);
  overflow:hidden;
  .list {
    background: #fff;
    display: flex;
    // justify-content:space-between;
    .h(97);
    .w(375);
    .describe {
      .w(248);
      .price {
        .margin(0, 0, 0, 13);
        display: flex;
        justify-content: space-between;
        color: red;
        .h(28);
        .l_h(28);
        // .btn{

        // }
        button {
          // .l_h(28);
          .w(25);
          .h(25);
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 25px;
          .margin(10,20,0,10);  
        }
      }
      .dec {
        .margin(18, 50, 0, 16);
        span {
          color: #333;
          .f_s(12);
          display: block;
          .h(20);
          .l_h(20);
        }
      }
    }
    .img {
      .margin(13, 0, 13, 50);
      img {
        .h(77);
        .w(77);
      }
    }
  }
}
</style>
