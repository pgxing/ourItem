<template>
  <div id="body">
    <nav>
      <span @click="back()"><</span>
      <span>我的粉丝</span>
    </nav>
    <div class="list">
        <input type="text" class="txt" placeholder="🔍请输入会员昵称">
        <span>搜索</span>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
 
  methods: {
    back() {
      this.$router.push({ path: "/my" });
    },
    chose(index) {
      this.state = index;
    }
  },
   mounted() {
        MessageBox('温馨提示', '要啥自行车啊~');
    },
};
</script>
<style lang='less' scoped>
@import "../../common/style/index.less";
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
.list span{
    color:#fff;
}
.txt{
    .w(310);
    .h(35);
    border-radius: 20px;
}
</style>

