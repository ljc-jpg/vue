import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
 
//首页组件
import index from '@/components/index/index.vue';
 

Vue.use(VueResource);
Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
];

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes
});

//制定默认进入的页面
router.push('/');
//另一个主页的内容页面
// router.push('/hello');

export default router;