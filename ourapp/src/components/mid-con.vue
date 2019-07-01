<template>
  <section class="mid-con">
    <ul class="info">
      <li v-for="(item,index) in infomation" :key="index" class="alli">
        <img :src="item.src" alt />
        <h3>{{item.titie}}</h3>
        <div>
          <span class="price">{{item.price}}</span>
          <span class="tocar">加购物车</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      infomation: []
    };
  },
  methods: {
    initData() {
      this.$axios
        .get("https://www.easy-mock.com/mock/5d14b08fea4d3e1eb5fb9725/shuju")
        .then(res => {
          this.list = res.data.info;
          this.infomation = this.list[0].msg;
        });
    }
  },
  watch: {
    $route: function(newVal, oldVal) {
      let index = newVal.query.id;
      this.infomation = this.list[index].msg;
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<style lang = 'less' scoped>
@import "~style/index.less";
.mid-con {
  .w(375);
}
.info {
  .margin(22, 0, 0, 0);
  .padding(0, 10, 0, 10);
  .w(355);
  .alli {
    .w(375);
    .h(250);
    img {
      .w(355);
      .h(160);
    }
    h3 {
      .w(355);
      .h(45);

      .l_h(45);
      .padding(0, 0, 0, 10);
    }
    div {
      .w(355);
      .h(45);
      display: flex;
      justify-content: space-between;
      align-items: center;
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

