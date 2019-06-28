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
          banners:[
          '/banner-img/1.jpg',
          '/banner-img/2.jpg'
      ]
      } 
  },
  
  
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.m-banner{
    
  .w(375);
  .h(95);
  img{
    width: 100%;
  }
}
</style>
