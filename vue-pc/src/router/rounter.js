import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//首页组件
const Index = ()=>import("@/components/index/Index")

//登录
const Login = ()=>import("@/components/login/Login")

//班级圈
const ClassCircle = ()=>import("@/components/classCircle/ClassCircle")

//班级圈管理
const Circle = ()=>import("@/components/classCircle/Circle")

//工资管理
const Profile = ()=>import("@/components/schProfile/Profile")

//工资审批
const SchProfile = ()=>import("@/components/schProfile/SchProfile")

//404
const NotFoundComponent = ()=>import("@/components/login/NotFoundComponent")

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
    path: '/classCircle',
    name: 'classCircle',
    component: ClassCircle
  },
  {
    path: '/schProfile',
    name: 'schProfile',
    component: SchProfile
  }
];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
  // , mode: 'history'
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
//制定默认进入的页面
router.push('/circle');
export default router;