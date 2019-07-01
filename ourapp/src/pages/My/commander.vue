<template>
    <div id="ddd">
       <nav>
           <span @click="back()"><</span>
           <span>申请团长</span>
       </nav>
    </div>
   
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
    methods: {
        back(){
            this.$router.push({path:'/my'})
        }
    },
     mounted() {
        MessageBox('温馨提示', '该功能暂未上线，敬请期待~');
    },
}
</script>
<style lang="less" scoped>
@import "../../common/style/index.less";
#ddd {
    .w(375);
    .h(667);
    background:#fff;
    position:fixed;
    .top(0);
    z-index:1;
}
#ddd nav{
    .w(375);
    .h(44);
    background:#99BC42;
    .l_h(44);
    display:flex;
}
nav span:nth-child(1){
    .f_s(24);
    color:#fff;
}
nav span:nth-child(2){
    .f_s(20);
    color:#fff;
    font-weight: 600;
    margin:0 auto;
}

</style>
