<template>
    <section class = 'home'>
        <ul class = 'nav'>
            <li v-for='(item,index) in info' :key='index' >
                {{item.title}}
            </li>
        </ul>
        <div class = 'test'>
            <MBanner></MBanner>
        </div>
    </section>
</template>

<script>

import MBanner from '../components/m-banner.vue'


export default {
    data(){
        return{
            info:[]
        }
    },
    
   components:{
       MBanner
   },
   methods:{
        initData(){
            this.$axios.get('https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju')
            .then((res) => {
                // let list = res.list;
                // this.singerDate(list)
                console.log(res)
                this.info = res.data.info
            })
        }
    },
    mounted(){
        this.initData();
    }

   
}
</script>

<style lang = 'less' scope>
    @import '../common/style/index.less';
    *{box-sizing:border-box;}
    .home{
        width:100%;
       
        .test{
            height:2000px;
            width:100%;
            background:pink;
        }
    }
    .nav{
        display:flex;
        justify-content:space-between;
        overflow:auto;
        .w(375);
        .h(50);
        background:skyblue;
        
        li{
            .w(80);
            .h(50);
            list-style-type: none;
            .f_s(16);
            .line-height(50);
            flex-shrink:0;
            text-align:center;
        }
        .sel{
            color: yellow;
            
        }
        
    }


</style>




