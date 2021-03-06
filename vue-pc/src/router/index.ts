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
    redirect: 'home',
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: 'login',
        component: login,
        meta: { redirectAlreadyLogin: true }
      },
      {
        path: 'home',
        component: home
      },
      {
        path: 'column/:id',
        component: column,
        meta: { requiredLogin: true }
      },
      {
        path: 'create',
        component: create,
        meta: { requiredLogin: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
})

router.beforeEach((to, from, next) => {
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  const { user, token } = store.state;
  //未登录过
  if ((!user.isLogin)) {
    if (requiredLogin) {
      next('login')
    } else {
      next()
    }
  }
  //登录过
  else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

//制定默认进入的页面
export default router
