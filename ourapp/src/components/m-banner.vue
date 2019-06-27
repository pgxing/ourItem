<template>
<div class='m-banner'>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for='(item,index) in banners' :key='index'>
          <img :src="item" alt="">
    </mt-swipe-item>

  </mt-swipe>
</div>
</template>
<script>
export default {
  data(){
    return{
      banners:[]
    }
  },
  props:['list'],
  watch:{
    list(newValue,oldValue){
      this.banners=newValue
    }
  }
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.m-banner{
  .w(375);
  .h(150);
  img{
    width: 100%;
  }
}
</style>
