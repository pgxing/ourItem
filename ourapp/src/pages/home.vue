<template>
    <section class = 'home'>
        sdsfghjk
        <div class = 'test'>
            <MBanner></MBanner>

        </div>
    </section>
</template>

<script>

import MBanner from '../components/m-banner.vue'


export default {
    data(){
        return{}
    },
    
   components:{
       MBanner
   },
   
}
</script>

<style lang = 'less' scope>
    @import '../common/style/index.less';
    .home{
        width:100%;
        position:fixed;
        .top(88);
        bottom:0;
        overflow:hidden;
        .test{
            height:2000px;
            width:100%;
            background:pink;

        }
    }


</style>




