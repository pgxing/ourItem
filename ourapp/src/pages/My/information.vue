<template>
  <div class="information">
    <header>
      <span @click="back">《</span>
      <div>用户基本信息</div>
    </header>
    <div>
      <div class="login-wrap">
        <h3>登录</h3>
        <p></p>
        <input id='tel' type="text" placeholder="请输入手机号" />
        <input id='pwd' type="password" placeholder="请输入密码" />
        <button @click='login'>登录</button>
        <span>没有账号？马上注册</span>
      </div>
      <!-- <div class="register-wrap" >
        <h3>注册</h3>
        <p></p>
        <input type="text" placeholder="请输入手机号" >
        <input type="password" placeholder="请输入密码">
        <button>注册</button>
        <span>已有账号？马上登录</span>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {
 
  methods: {
    back() {
      this.$router.go(-1);
    },
    login(){
      //判断手机
      let regTel = /^1[3578]\d{9}$/
      let telStar=tel.value
      if(!regTel.test(telStar)){
        alert('手机号码不合法')
         return false
      }
     //判断密码
     let regPwd = /^.{6,}$/
     let pwdStar = pwd.value
     if(!regPwd.test(pwdStar)){
       alert('密码不合法')
       return false
     }
     //如果手机号和密码都合法 开始存储数据
     let userObj={
       'tel':telStar,
       'pwd':pwdStar
     }
     console.log(userObj)
     
     localStorage.setItem('userinfo',JSON.stringify(userObj))
        alert('登录成功')
     this.$router.push('../my')
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
.information {
  background: #008000;
  position: fixed;
  .bottom(44);
  .top(0);
  .w(375);
  // z-index:999;
  header {
    display: flex;
    .h(44);
    .w(375);
    .f_s(18);
    .l_h(44);
    color: #fff;
    background: @bg-color-blue;
    div {
      text-align: center;
      flex: 1;
    }
  }
}
.login-wrap {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}
span {
  cursor: pointer;
}
span:hover {
  color: #41b883;
}
</style>

