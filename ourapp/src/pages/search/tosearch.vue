<template>
    <div class="tosearch">
        <header>
            <span @click="back">《</span>
            <div>商品搜索</div>
        </header>
        <div class="inpdiv">
            <input type="text" class="serInp" placeholder="请输入商品名称">
            <span>搜索</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.tosearch{
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 3;
    .w(375);
    background: #fff;
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
    .inpdiv{
        .h(55);
        .w(375);
        background: #99bb42;
        .padding(12,0,0,12);
        display: flex;
        .serInp{
            .w(320);
            .h(30);
            background: #fefefe;
            .l_h(30);
            .padding(0,0,0,20);
            color: #999;
            .f_s(14);
            border-radius: 15px;
            
        }
        span{
            .w(50);
            .h(30);
            text-align: center;
            .l_h(30);
            color: #fff;
            .f_s(14)
        }
    }
}
</style>


