<template>
    <section class = 'home'>
        <ul class = 'nav'>
            <li @click='choose(index)'
                :class="index == num ? 'active' : ''"
                v-for='(item,index) in info' 
                :key='index' >

               {{item.title}}
                
            </li>
        </ul>
        <section class = 'line'>
            <div class = 'test'>
                <MBanner></MBanner>
                <router-view></router-view>
            </div>
            
        </section>
        
    </section>
</template>

<script>

import MBanner from '../components/m-banner.vue'
import Mid from '../components/mid-con.vue'
import BS from 'better-scroll'

export default {
    data(){
        return{
            info:[],
            num : 0
        }
    },
   components:{
       MBanner,
       Mid
   },
   
   methods:{
        initData(){
            this.$axios.get('https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju')
            .then((res) => {
                
               
                this.info = res.data.info
            })
        },
        choose(index){
            
            this.num = index;
            this.$router.push({path: `/mid/${this.info[index].title}`, query: {id:index}})
        },
        initBS() {
            this.scroll = new BS(".line", { probeType: 3 });
        }
    },
    mounted(){
        this.initData();
        setTimeout(() => {
            this.initBS();
        }, 20)
    }
}
</script>

<style lang = 'less' scoped>
    @import '../common/style/index.less';
    
    .home{
        width:100%;
        height:100%;
       position:relative;
        background:#fff;
    }
    .line{
        position: fixed;
        .top(95);
        /* .h(525); */
        height:100%;
        /* .padding(95,0,44,0); */
        .f_s(16);
        .w(375);
        bottom: 0px;
        overflow: hidden;
        .test{
            position:absolute;
            top:0;
            z-index: 10;
            bottom:0;
            .w(375);
            .h(5250);
        }
        .content{
            .w(375);
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
    .active{
        .f_s(30);
        color: #000;
        font-weight:bolder;
        background: #fff;
    }

    
</style>




