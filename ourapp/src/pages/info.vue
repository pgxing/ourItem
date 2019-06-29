<template>
  <div class="swiper">
    <ul class="info">
      <li v-for="(item,index) in foodinfo" :key="index" class="alli" @click = "play(index)">
        <img v-lazy="item.src"
            @click="todetail"
        >
        <h3>{{item.titie}}</h3>
        <div>
          <span class="price">{{item.price}}</span>
          <span class="tocar" @click="addcar(item)">加购物车</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import BS from "better-scroll";
export default {
  data() {
    return {
      list: [],
      foodinfo: [],
      carlist :[]
    };
  },
  methods: {
    initData() {
      this.$axios
        .get("https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju")
        .then(res => {
          this.list = res.data.info;
          this.foodinfo = this.list[0].msg;
        });
    },
    initBS() {
      this.scroll = new BS(".swiper", { click: true, probeType: 3 });
    },
    addcar(item) {
      let flag = true;
      if(!item.id){
          item.id = 1;
        //   this.carlist.push(item)
      }
      if (this.carlist.length == 0) {
        this.carlist.push(item);
      } else {
        for (var i = 0; i < this.carlist.length; i++) {
          if (this.carlist[i].src == item.src) {
              console.log(this.carlist[i].src)
              this.carlist[i].id++;
              flag = false;
              break;
          }
        }
        if(flag){
            this.carlist.push(item)
        }
      }
      //存进localstorage
      localStorage.setItem('info',JSON.stringify(this.carlist))
      console.log(JSON.parse(localStorage.getItem('info')))
      // this.carlist.forEach(function(value,index){
      //     if(value == item){

      //     }
      // })
      // console.log(this.carlist)
    },
    todetail(){
        console.log(this.$store.state.Detail.show)
        this.$store.state.Detail.show = true;
    },
    play(index){
      this.$store.commit('play')
      this.$store.commit('addImgList',this.foodinfo)
      let list = this.foodinfo
      

      this.$store.commit('changeCurrentIndex',index)
    }

  },
  watch: {
    $route: function(newVal, oldVal) {
      let index = newVal.params.id;
      this.foodinfo = this.list[index].msg;
      
    }
  },
  mounted() {
    this.initData();
    this.initBS();
    // this.carlist = [];
  }
};
</script>
<style lang="less" scoped>
@import "~style/index.less";
.swiper {
  // height: 100%;
  .h(524);
  overflow: hidden;
}
.info {
  .w(285);
  float: left;
  .alli {
    .w(285);
    .h(225);
    .padding(12, 0, 0, 15);
    img {
      .w(258);
      .h(130);
    }
    h3 {
      .w(258);
      .h(43);
      .l_h(43);
      .padding(0, 0, 0, 10);
    }
    div {
      .w(258);
      .h(40);
      display: flex;
      justify-content: space-between;
      .padding(7, 0, 0, 0);
      .price {
        .h(26);
        color: #d3483e;
        .l_h(26);
        text-align: center;
        .f_s(16);
        font-weight: 900;
      }
      .tocar {
        .w(77);
        .h(26);
        background: #99bb42;
        border-radius: 3px;
        .f_s(14);
        .l_h(26);
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>


