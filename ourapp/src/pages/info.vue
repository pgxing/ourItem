<template>
    <ul class="info">
        <li v-for="(item,index) in foodinfo" 
            :key="index"
            class="alli"
        >
            <img :src="item.src" alt="">
            <h3>{{item.title}}</h3>
            <div>
                <span class="price">{{item.price}}</span>
                <span class="tocar">加购物车</span>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            foodinfo:[]
        }
    },
    methods : {
        initData(){
            this.$axios.get('https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju')
            .then((res) => {
                this.list = res.data.info
                this.foodinfo = this.list[0].msg
            })
        }
    },
    watch : {
        '$route':function(newVal,oldVal){
            let index = newVal.params.id
            this.foodinfo = this.list[index].msg
        }
    },
    mounted(){
        this.initData()
    }
}
</script>
<style lang="less" scoped>
@import '~style/index.less';
.info{
    .w(285);
    height: 100%;
    background: skyblue;
    float: left;
    .alli{
        .w(285);
        .h(225);
        background: slateblue;
        .padding(12,0,0,15);
        img{
            .w(258);
            .h(130);
        }
        h3{
            .w(258);
            .h(43);
            background: yellow
        }
        div{
            .w(258);
            .h(40);
            background: green;
            display: flex;
            justify-content: space-between;
            .padding(7,0,0,0);
            .price{
                .h(26);
                color: #d3483e;
                .l_h(26);
                text-align: center;
                .f_s(16);
                font-weight: 900;
            };
            .tocar{
                .w(77);
                .h(26);
                background: #99bb42;
                border-radius: 3px;
                .f_s(14);
                .l_h(26);
                color: #fff;
                text-align: center

            }
        }
    }
}
</style>


