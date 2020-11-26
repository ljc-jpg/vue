import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'

import login from '../views/Login.vue'

import index from '../views/Index.vue'

import home from '../views/Home.vue'

import column from '../views/ColumnDetail.vue'

import create from '../views/Create.vue'

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
      }, 
      {
        path: 'home',
        component: home
      },
      {
        path: 'column/:id',
        component: column
      },
      {
        path: 'create',
        component: create
      }
    ]
  }
]

const router = createRouter({
  history:  createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if ((to.name != 'login') && (!store.state.user.isLogin)) {
    next({ name: 'login' })
  } else {
    next()
  }
})

//制定默认进入的页面
export default router
