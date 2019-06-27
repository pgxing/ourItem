import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'pages/home'
import Car from 'pages/car'
import My from 'pages/my'
import Search from 'pages/search'

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
        path:'/search',
        component:Search
      }

  ]
})
