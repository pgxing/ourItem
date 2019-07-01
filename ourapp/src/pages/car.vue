<template>
  <div class="car">
    <div class="car-top">
      <div class="leftDiv">
        <span>共<b>{{list.length}}</b>件商品</span>
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
              <input type="checkbox" ref="inp" @click="comprice(index)">
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
                <button class="jian" @click="reduce(index)">-</button>
                <span>{{item.id}}</span>
                <button class="add" @click="add(index)">+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="car-foot">
      <div class="leftDiv">
        <input type="checkbox" @click="allChose" ref="all">
        <span>全选</span>
      </div>
      <div class="rightDiv">
        <span>合计<b>￥{{allPrice}}</b></span>
        <p ref="topay"
          @click="topay"
        >未选购</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      list: [],
      allprice: 0
    };
  },
  methods: {
    change() {
    },
    add(index) {
      let list = JSON.parse(localStorage.getItem("info"));
      list[index].id++;
      //存进localstorage
      localStorage.setItem("info", JSON.stringify(list));
      this.update();
      this.afterchange(index);

      let inp = this.$refs.inp;
      if (inp[index].checked) {
        let price = this.afterchange(index);
        this.allprice += price;
      }
    },
    reduce(index) {
      let list = JSON.parse(localStorage.getItem("info"));
      if(list[index].id >0){
          list[index].id--;
      }
      if(list[index].id == 0){
        //从列表中删除这条数据
        list.splice(index,1)
        //存进localstorage
        localStorage.setItem("info", JSON.stringify(list));
        this.update();
      }else{
        //存进localstorage
        localStorage.setItem("info", JSON.stringify(list));
        this.update();
      }
      

      let inp = this.$refs.inp;
      if (inp[index].checked) {
        let price = this.afterchange(index);
        this.allprice -= price;
      }
    },
    afterchange(index) {
      let aprice = Number(this.list[index].price.slice(1));
      return aprice;
    },
    update() {
      let list = JSON.parse(localStorage.getItem("info"));
      this.list = list;
    },
    initBS() {
      this.scroll = new BS(".carList", { click: true, probeType: 3 });
    },
    allChose(e) {
      if (e.target.checked) {
        this.allprice = 0;
        for (var i = 0; i < this.$refs.inp.length; i++) {
          this.$refs.inp[i].checked = true;
          this.comprice(i);
        }
      } else {
        for (var i = 0; i < this.$refs.inp.length; i++) {
          this.$refs.inp[i].checked = false;
          this.comprice(i);
        }
      }
    },
    comprice(index) {
      let inp = this.$refs.inp;
      let num = Number(this.list[index].id);
      let aprice = Number(this.list[index].price.slice(1));
      let price = num * aprice;
      if (inp[index].checked) {
        this.allprice += price;
        this.$refs.topay.innerHTML = "去结算";
        this.$refs.topay.style.background = "#99bb42";
      } else {
        this.allprice -= price;
        
        let flag = true;
        for(var i = 0 ; i < inp.length ; i++){
          if(inp[i].checked == true){
            flag = false;
          }
        }
        if(flag){
            this.$refs.topay.innerHTML = "未选购";
            this.$refs.topay.style.background = "#ccc";
        }
        
      }
    },
    topay(){
      let all = this.$refs.all
      if(all.checked){
        // this.$route.path('/home')
        this.$router.push({path:'/car/pay',query : {buylist : this.list,allprice:Math.floor(this.allprice * 100) / 100}})
      }
    }
  },
  mounted() {
    this.update();
    this.initBS();
  },
  computed: {
    allPrice() {
      return Math.floor(this.allprice * 100) / 100;
    }
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
//去掉单选框原有的样式
input,
button {
  -webkit-appearance: none;
}
.car-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .h(44);
  .w(375);
  background: #A1C729;
  .f_s(14);
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
  .h(491);
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
          span {
            .f_s(14);
            .h(25);
            .l_h(25);
            text-align: center;
          }
          button {
            // .l_h(28);
            .w(25);
            .h(25);
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 25px;
            .l_h(25);
            .margin(0, 10, 0, 10);
            outline: none;
          }
          .jian {
            .f_s(18);
            color: #99bb42;
            .l_h(23);
          }
          .add {
            .f_s(18);
            color: #fff;
            background: #99bb42;
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
      div {
        .w(50);
        .h(77);
        display: flex;
        justify-content: center;
        align-items: center;
        input {
          .w(25);
          .h(25);
          border: 1px solid #ddd;
          border-radius: 14px;
          &:checked {
            background: #99bb42 url("/first/check.jpg") no-repeat center center;
            background-size: 15px 12px;
            border: 1px solid #99bb42;
          }
        }
      }
      .margin(13, 0, 13, 0);
      img {
        .h(77);
        .w(77);
      }
    }
  }
}

.car-foot {
  position: fixed;
  z-index: 1;
  .bottom(44);
  .h(44);
  .w(375);
  background: @bg-color-white;
  .f_s(14);
  justify-content: space-between;
  display: flex;
  .leftDiv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .w(80);
    .padding(0, 0, 0, 9);
    input {
      .w(25);
      .h(25);
      border: 1px solid #ddd;
      border-radius: 14px;
      &:checked {
        background: #99bb42 url("/first/check.jpg") no-repeat center center;
        background-size: 15px 12px;
        border: 1px solid #99bb42;
      }
    }
    span {
      display: block;
      // .margin(15, 15, 15, 15);
      color: #333;
    }
  }
  .rightDiv {
    display: flex;
    span {
      display: block;
      .margin(14, 30, 14, 30);
      color: #333;
      b{
        color: red;
        .f_s(16);
      }
    }
    p {
      .h(44);
      .w(105);
      .l_h(44);
      text-align: center;
      background: #ccc;
      color: #fff;
      .f_s(16);
    }
  }
}
</style>
