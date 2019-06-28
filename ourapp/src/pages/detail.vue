<template>
    <div class="detail" v-if="this.$store.state.Detail.show">
        <header>
            <span @click="close">《</span>
            <div>商品详情</div>
        </header>
        
    </div>
</template>
<script>
export default {
    methods:{
        close(){
            this.$store.state.Detail.show = false;
        },

    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.detail{
    position: fixed;
    top: 0;
    bottom: 0;
    .w(375);
    background: skyblue;
    header{
        .h(44);
        .w(375);
        background: #99bb42;
        display: flex;
        .f_s(18);
        color: #fff;
        span{
            .h(44);
            .l_h(44);
            display: block;
            text-align: center;
        }
        div{
            .h(44);
            .l_h(44);
            flex: 1;
            text-align: center; 
        }
    }
}
</style>

