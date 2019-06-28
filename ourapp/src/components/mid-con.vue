<template>
    <section class = 'mid-con'>
        这是内容区域
       <li v-for='(item,index) in infomation'
               :key='index'
           >
           {{item.price}}
        </li>
    </section>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            infomation:[]
        }
    },
    methods :{
        initData(){
            this.$axios.get('https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju')
            .then((res)=>{
                this.list = res.data.info
            })
       }
    },
    watch : {
        '$route' : function(newVal,oldVal){
            let index = newVal.query.id
            this.infomation = this.list[index]
            console.log(this.infomation)
        }
    },
    mounted(){
        this.initData()
    }
}
</script>

<style lang = 'less' scope>
    @import '../common/style/index.less';
    .mid-con{
        .w(375);
        .h(1200);
        background:yellow;

    }
</style>

