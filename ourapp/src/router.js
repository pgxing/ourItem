import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//主页面路由
import Home from 'pages/home'
import Car from 'pages/car'
import My from 'pages/my'
import Search from 'pages/search'
import Coin from 'pages/My/coin'
import Coupon from 'pages/coupon'
import Fans from 'pages/My/fans'
import WaitingPay from 'pages/My/waitingPay'
import AlreadyPay from 'pages/My/alreadyPay'
import WaitingGet from 'pages/My/waitingGet'
import AlreadyGet from 'pages/My/alreadyGet'
import MyTeam from 'pages/My/myTeam'
import Addressee from 'pages/My/addressee'
import Commander from 'pages/My/commander'
import ClearCache from 'pages/My/clearCache'
import Orders from 'pages/orders'
import CreateAddressee from 'pages/createAddressee'

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
        component:My,
        children:[
          {
            path:'coin',
            component:Coin
          },
          {
            path:'fans',
            component:Fans
          },
        {
          path:'waitingPay',
          component:WaitingPay
        },
        {
          path:'alreadyPay',
          component:AlreadyPay
        },
        {
          path:'waitingGet',
          component:WaitingGet
        },
        {
          path:'alreadyGet',
          component:AlreadyGet
        },
        {
          path:'myTeam',
          component:MyTeam
        },
        {
          path:'addressee',
          component:Addressee,
        },
        {
          path:'commander',
          component:Commander
        },
        {
          path:'clearCache',
          component:ClearCache
        },
      ]
      },
      {
        path:'/search',
        component:Search
      },
      /* 全部订单*/
      {
        path:'/orders',
        component:Orders
      },
      {
        path:'/coupon',
        component:Coupon
      },
      {
        path:'/createAddressee',
        component:CreateAddressee
      }
  ]
})
