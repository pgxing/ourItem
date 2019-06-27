<template>
  <div id="app">
    <MHead></MHead>

    <router-view/>

    <MNav></MNav>
    
  </div>
</template>
<script>
import MHead from './components/m-head'
import MNav from './components/m-nav'
export default {
  components:{
    MHead,
    MNav
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
