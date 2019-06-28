<template>
    <div class="search">
        <header>
            <div class="serInp">♥ 搜索</div>
        </header>
        <ul class="aside">
            <li v-for="(item,index) in info"
                :key="index"
                @click="chose(index)"
                :class="index == state ? 'green' : ''"
            >{{item.title}}{{index}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:[],
            state:0
        }
    },
    methods:{
        initData(){
            this.$axios.get('https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju')
            .then((res) => {
                // let list = res.list;
                // this.singerDate(list)
                console.log(res.data.info)
                this.info = res.data.info
            })
        },
        chose(index){
            console.log(index)
            this.state = index;
        }
    },
    mounted(){
        this.initData();
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less'; 
.serch{
    height: 100%;
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
    .aside{
        height: 100%;
        .w(90);
        background: #f7f7f8;
        li{
            .f_s(14);
            .h(48);
            .l_h(48);
            text-align: center;
        }
        .green{
            color: #99bb42;
            background: #fff;
        }
    }
}
</style>


