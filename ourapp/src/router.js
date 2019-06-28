import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//主页面路由
import Home from 'pages/home'
import Car from 'pages/car'
import My from 'pages/my'
import Search from 'pages/search'

  //home页面插件路由
  // import Recommend from 'components/recommend.vue'
  // import Place from 'components/place.vue'
  // import Snack from 'components/snack.vue'
  // import Vegetables from 'components/vegetables.vue'
  // import Flowers from 'components/flowers.vue'
  // import Life from 'components/lefe.vue'`

export default new Router({
  routes: [
      {
        path:'/home',
        component:Home,
        
      },
      {
        path:'/car',
        component:Car
      },
      {
        path:'/my',
        component:My
      },
      {
        path:'/search',
        component:Search
      }

  ]
})
