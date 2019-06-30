<template>
  <div id="app">
    <MHead></MHead>

    <router-view/>

    <MNav></MNav>
   
    <Detail></Detail>
     <!-- <router-view/> -->
    
    <!-- <Information></Information> -->
  </div>
</template>
<script>
import MHead from './components/m-head'
import MNav from './components/m-nav'
import Detail from './pages/detail'
export default {
  components:{
    MHead,
    MNav,
    Detail,
  }
}
</script>

<style lang="less">
  @import './common/style/index.less';
  #app{
    background:#222;
    position:fixed;
    top:0;
    bottom:0;
    .w(375);
  }
</style>
