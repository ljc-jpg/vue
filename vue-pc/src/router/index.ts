import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


import login from '../views/Login.vue'

import index from '../views/Index.vue'

import pay from '../views/Pay.vue'

import profile from '../views/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  //默认路由地址
  {
    path: '/',
    redirect: 'login',
  },

  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: 'login',
        name: 'login',
        component: login,
      }, {
        path: 'pay',
        component: pay
      },
      {
        path: 'profile',
        component: profile
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//制定默认进入的页面
export default router
