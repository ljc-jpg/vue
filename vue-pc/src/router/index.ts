import { createRouter, createWebHashHistory, RouteRecordRaw  } from 'vue-router'


import login from '../views/Login/Login.vue'

import index from '../views/Index/Index.vue'

import pay from '../views/Pay/Pay.vue'

import profile from '../views/Profile/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  //默认路由地址
  {
    path: '/',
    redirect: '/index/pay',
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [{
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
