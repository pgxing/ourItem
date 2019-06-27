<template>
     <ul class='m-nav'>
      <router-link active-class='sel' tag='li' to='/recommend'>
        <span>首页</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/singer'>
       <span>分类搜索</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/rank'>
        <span>购物车</span>
      </router-link>
      <router-link active-class='sel' tag='li' to='/search'>
        <span>我的</span>
      </router-link>      
  </ul>
</template>

<script>

export default {
    
}
</script>

<style lang='less'>
    @import '~style/index.less';
    .m-nav{
        position:absolute;
        bottom:0;
        display: flex;
        background: green;
        justify-content: space-around;
        .w(375);
        li{
            // .h(44);
            height: 44px;
            .l_h(44);
            color:#fff;
            .f_s(14);
            span{
            padding-bottom:3px; 
            }
        }
        .sel{
            color: yellow;
            
        }
}
   
</style>


