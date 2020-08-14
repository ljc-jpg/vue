import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//首页组件
import Index from '@/components/index/Index';

//登录
import Login from '@/components/login/Login';

//班级圈
import ClassCircle from '@/components/classCircle/ClassCircle'

//班级圈管理
import Circle from '@/components/classCircle/Circle'

//工资管理
import Profile from '@/components/schProfile/Profile'

//工资审批
import SchProfile from '@/components/schProfile/SchProfile'

//404
import NotFoundComponent from '@/components/login/NotFoundComponent'


Vue.use(VueResource);
Vue.use(VueRouter);

let routes = [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    component: NotFoundComponent
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [{
        path: '/circle',
        component: Circle
      },
      {
        path: '/profile',
        component: Profile
      }
    ]
  },
  {
    path: '/',
    name: 'classCircle',
    component: ClassCircle,
    children: [{
      path: '/classCircle',
      component: ClassCircle
    }]
  },
  {
    path: '/schProfile',
    name: 'schProfile',
    component: SchProfile,
    children: [{
      path: '/schProfile',
      component: SchProfile
    }]
  }
];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
  // , mode: 'history'
});

//制定默认进入的页面
router.push('/circle');
export default router;