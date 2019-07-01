<template>
    <div class="serch">
        <header>
            <div class="serInp"
                @click="tosearch"
            >♥ 搜索</div>
        </header>
        <!-- <router-view name="Tosearch"></router-view> -->
        <ul class="aside">
            <li v-for="(item,index) in info"
                :key="index"
                @click="chose(index)"
                :class="index == state ? 'green' : ''"
            ><span>{{item.title}}</span></li>
        </ul>
        <router-view name="Tosearch"></router-view>
        <router-view name="Info"></router-view>
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
            this.state = index;
            //显示商品列表
            
            this.$router.push({path:`/search/info/${index}`})
        },
        tosearch(){
            this.$router.push({path:'/search/tosearch'})
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
    background: #fff;
    header{
        .h(55);
        .w(375);
        background: #A1C729;
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
        float: left;
        background: #f7f7f8;
        li{
            .f_s(14);
            .h(48);
            .l_h(48);
            text-align: center;
            span{
                .h(16);
                .l_h(16);
                .w(90);
                display: inline-block;
                border-left: 4px solid #f7f7f8;
                
            }
        }
        .green{
            color: #99bb42;
            background: #fff;
            span{
                border-left: 4px solid #99bd42;
            }
        }
    }
}
</style>


