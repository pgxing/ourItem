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
            </div>
            <router-view></router-view>
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
        }
    },
    mounted(){
        this.initData();
        new BS('.line')
    }

   
}
</script>

<style lang = 'less' scope>
    @import '../common/style/index.less';
    
    .home{
        width:100%;
        
       position:relative;
        
    }
    .line{
        position: fixed;
        .top(88);
        bottom: 0px;
        overflow: hidden;
        .test{
           
            .w(375);
            background: greenyellow;
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




