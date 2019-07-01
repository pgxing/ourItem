<template>
  <div id="body">
    <nav>
      <span @click="back()"><</span>
      <span>我的优惠券</span>
    </nav>
    <ul class="list">
      <li
        v-for="(item,index) in info"
        :key="index"
        @click="chose(index)"
        :class="index == state ? 'chosen' : ''"
      >{{item}}</li>
      <!-- <li>待付款</li>
            <li>已付款</li>
            <li>待发货</li>
      <li>待收货</li>-->
    </ul>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      info: ["未使用", "已使用", "已过期"],
      state: 0
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/my" });
    },
    chose(index) {
      this.state = index;
    }
  },
   mounted() {
        MessageBox('温馨提示', '该功能暂未上线，敬请期待~');
    },
};
</script>
<style lang='less' scoped>
@import "../common/style/index.less";
#body {
  .w(375);
  .h(667);
  background: #f6f6f6;
  position: fixed;
  z-index: 1;
  .top(0);
}
#body nav {
  .w(375);
  .h(44);
  background: #99bc42;
  .l_h(44);
  display: flex;
}
nav span:nth-child(1) {
  .f_s(24);
  color: #fff;
}
nav span:nth-child(2) {
  .f_s(20);
  color: #fff;
  font-weight: 600;
  margin: 0 auto;
}
.list {
  .w(375);
  .h(55);
  background: #99bc42;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .f_s(16);
  color: #737373;
}
.list li {
  .h(50);
  .l_h(50);
}
.chosen {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>

