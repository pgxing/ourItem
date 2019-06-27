import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'pages/home'
import Car from 'pages/car'
import My from 'pages/my'
import Serch from 'pages/serch'

export default new Router({
  routes: [
      {
        path:'/home',
        component:Home
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
        path:'/serch',
        component:Serch
      }

  ]
})
