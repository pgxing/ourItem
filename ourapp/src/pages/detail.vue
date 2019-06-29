<template>
<section>
    <div class="detail" v-if="this.$store.state.Detail.show">
        <header>
            <span @click="close">《</span>
            <div>商品详情</div>
        </header>
        <div class = 'imgbox'>
            <img :src= "currentImg.src" alt="">
        </div>
        <p class = 'txt1'>
           {{currentImg.titie}}
        </p>
        <p class = 'txt2'>
            {{currentImg.price}}
        </p>
        <section class = 'foot'>
            <div class = 'first' @click = 'first'>首页</div>
            <div class = 'car' @click = 'car'>购物车</div>
            <div class = 'add' @click = 'add'>加入购物车</div>
            <div class = 'buy' @click = 'buy'>立即购买</div>
        </section>
    </div>
    
</section>
</template>
<script>
import {mapGetters,mapState} from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
    // data(){
    //     return{
    //         asd:[]
    //     }
    // },
    methods:{
        close(){
            this.$store.state.Detail.show = false;
        },
        first(){
            console.log('返回首页')
            this.$router.replace("/home")
            
            this.$store.state.Detail.show=false
        },
        car(){
            console.log('购入车')
            this.$router.replace("/car")
            
            this.$store.state.Detail.show=false
        },
        add(){
            console.log('加入购物车')
//             this.$messagebox({

//           title: '温馨提示',

//           message: '订单支付成功',

//           showCancelButton: true,

//           confirmButtonText:"继续购物",

//           cancelButtonText:"查看订单"

//         })
        },
        buy(){
            console.log('立即购买')
        }

    },
    mounted(){
        //  let aaa = this.$store.state.Detail
        //  console.log('打印列表',aaa)
        // MessageBox('提示', '生命周期加载完成');
    },
    computed:{
        show(){
            return this.$store.state.Detail.show
        },
        ...mapGetters(['currentImg']),
        ...mapState(['currentIndex']),
    },
    watch:{
        show(){
           
            this.asd = this.$store.state.Detail.imgList
            console.log(this.asd)
        }
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
    .imgbox{
        .w(375);
        .h(375);
        background:pink;
        img{
            width:100%;
            height:100%;
        }
    }
    .txt1{
        .h(30);
        .w(375);
        .f_s(20);
        font-size:bolder;
        .margin(12,0,12,0);
    }
    .txt2{
        .h(30);
        .w(375);
        .f_s(26);
        color:red;
    }
    .foot{
        position:fixed;
        bottom:0;
        display:flex;
        .w(375);
        .h(48);
        .f_s(16);
        // background:green;
        text-align:center;
        .l_h(48);
        border:1px solid #ccc;
        .first{
            .w(62.5);
            height:100%;
            color:rgb(53, 51, 51);
        }
        .car{
            .w(62.5);
            height:100%;
            color:rgb(53, 51, 51);
        }
        .add{
            .w(125);
            height:100%;
            background:orange;
            color:#fff;
        }
        .buy{
             .w(125);
            height:100%;
            background:yellowgreen;
            color:#fff;
        }
    }
}
</style>

