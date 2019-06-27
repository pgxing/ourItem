<template>
    <div class="serch">
        <header>
            <div class="serInp">♥ 搜索</div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import '~style/index.less'; 
.serch{
    height: 1000px;
    .w(375);
    background: orange;
    header{
        .h(55);
        .w(375);
        background: #99bb42;
        .padding(12,0,0,12);
        .serInp{
            .w(351);
            .h(30);
            background: #fefefe;
            .l_h(30);
            text-align: center;
            color: #999;
            .f_s(14);
            border-radius: 15px;
            
        }
    }
}
</style>


