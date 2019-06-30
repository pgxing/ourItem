<template>
  <div id="ddd">
    <nav>
      <span @click="back()">《</span>
      <span>我的收货人</span>
    </nav>
    <button @click="to()">新增收货人&nbsp;<span>+</span></button>
    <ul class="list">
      <li v-for="(item,index) in list " :key="index"
        @click="select(index)"
      >
        <div class="info">
          <p class="left">
            <span>{{item.user}}</span>
            <br />
            {{item.phone}}
            <br />
            {{item.address}}
          </p>
          <p class="right">
            <span>删除</span>|
            <span>编辑</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    to() {
      this.$router.push({ path: "/createAddressee" });
    },
    select(index){
      localStorage.select = index
      this.$router.go(-1)
    }
  },
  mounted() {
    if (localStorage.users) {
      this.list = JSON.parse(localStorage.getItem("users"));
      console.log(this.list);
    }
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
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
  .f_s(18);
  color: #fff;
}
nav span:nth-child(2) {
  .f_s(18);
  color: #fff;
  font-weight: 600;
  margin: 0 auto;
}
#ddd button {
  position: fixed;
  bottom: 10px;
  .w(355);
  .margin(0,10,0,10);
  .h(36);
  border: 2px solid #b3cd73;
  background: #fff;
  border-radius: 5px;
  background: #99bc42;
  color: #fff;
  .f_s(18);
  span{
    .f_s(20)
  }
}
.info {
  .f_s(16);
  color: #b2b2b2;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info .left span {
  color: #000;
  font-weight: 900;
}
.list{
  .padding(10,10,0,10);
  li{
     border-bottom: 1px solid rgba(178, 178, 138, 0.2);
     .padding(0,0,10,0)
  }
}
</style>


