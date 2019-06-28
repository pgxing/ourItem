<template>
  <div class="car">
    <div class="car-top">
      <div class="leftDiv">
        <span>共件商品</span>
      </div>
      <div class="rightDiv">
        <span>清理失效商品</span>
        <span @click='change' ref='name'>编辑</span>
      </div>
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
  </div>
</template>
<script>
export default {
    methods: {
        change(){
            console.log(this)
        }
    },
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
// .car{
//     position:fixed;
//     .top
// }
.car-top {
  // position:fixed;
  // .top(44);
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
.car-foot {
  position: fixed;
  .bottom(44);
  .h(50);
  .w(375);
  background: @bg-color-white;
  .f_s(14);
  justify-content: space-between;
  display:flex;
  .leftDiv {
    span {
      display: block;
      .margin(15, 15, 15, 15);
      color: #333;
    }
  }
  .rightDiv{
    display:flex;
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
</style>
