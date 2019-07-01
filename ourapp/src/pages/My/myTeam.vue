<template>
<<<<<<< HEAD
  <div id="ddd">
    <nav>
      <span @click="back()"><</span>
      <span>我的团长</span>
    </nav>
  </div>
=======
    <div id="ddd">
       <nav>
           <span @click="back()">》</span>
           <span>我的团长</span>
       </nav>
    </div>
   
>>>>>>> 4cf85a2f84d7726bd2901c6ac8e044c85328ce9c
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  methods: {
    back() {
      this.$router.push({ path: "/my" });
    },
  },
  mounted() {
      MessageBox("温馨提示", "该功能暂未成熟~隔壁收货人可用！");
    }
};
</script>
<style lang="less" scoped>
@import "../../common/style/index.less";
#ddd {
  .w(375);
  .h(667);
  background: #fff;
  position: fixed;
  .top(0);
  z-index: 1;
}
#ddd nav {
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
</style>
