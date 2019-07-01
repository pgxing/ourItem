<template>
  <div id="ddd">
    <nav>
      <span @click="back()"><</span>
      <span>新增收货人</span>
    </nav>
    <form action>
      <table class="biaoge">
        <tr>
          <td>收货人:</td>
          <td>
            <input type="text" ref="user">
          </td>
        </tr>
        <tr>
          <td>联系电话:</td>
          <td>
            <input type="number" ref='phone' placeholder="请输入收货人电话">
            <button>微信手机号授权</button>
          </td>
        </tr>
        <tr>
          <td>所在地区:</td>
          <td>
            <select name id>
              <option value>北京市</option>
            </select>
            <select name id>
              <option value>北京市</option>
            </select>
            <select name id>
              <option value>昌平区</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>详细地址:</td>
          <td>
            <input type="email" ref='address' placeholder="请输入详细地址，如小区，门牌号">
          </td>
        </tr>
        <tr>
          <td colspan="2">
              <span>设为默认收货人</span>
              <input type="checkbox" ref="state">
          </td>
        </tr>
      </table>
    </form>
    <button class="submit" 
    @click="getInfo()"
    >保存</button>
  </div>
</template>
<script>
export default {

  data(){
    return {
      addInfo:[],
      obj:{}
    }
  },
  methods: {
    back() {
      this.$router.push({ path: "/my" });
    },
    /* 获取input内的值并存入到数组中*/
    getInfo(){
      this.obj.user = this.$refs.user.value
      this.obj.phone = this.$refs.phone.value
      this.obj.address = this.$refs.address.value
      this.obj.state = this.$refs.state.value
      this.addInfo.push(this.obj)
      console.log(this.addInfo)
      localStorage.setItem('users',JSON.stringify(this.addInfo));
      setTimeout(() => {
        this.$router.push('/my/addressee')
      }, 1000);
    },
  
  },
  mounted() {
    console.log(1)
     if(localStorage.users){
            this.addInfo = JSON.parse(localStorage.getItem("users"))
            console.log(this.addInfo)
        }
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/index.less";
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
.biaoge {
  .margin(0, 0, 0, 5);
  .w(365);
  .h(300);
  border-spacing: 0;
  .f_s(18);
}
.biaoge td {
border-bottom:1px solid rgba(158,158,158,0.1);
}
.biaoge input {
  display: inline-block;
 
  .h(30);
  .w(170);
}
.biaoge tr:nth-child(2) button{
  background:#99BC42;
  border-style: none;
  color:#fff;
  .w(110);
  .h(30);
  border-radius:4px;
}
.biaoge tr:nth-child(4) input{
  .w(240);
}
.submit{
  .w(375);
  .h(50);
  background:#99BC42;
  color:#fff;
   border-style: none;
    border-radius:30px;
    .f_s(18);
}
</style>

<!--
1.通过ref绑定input
2.再用this.$refs.元素获取到
3.放到一个对象里面
-->
