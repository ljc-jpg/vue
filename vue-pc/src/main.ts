import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

//请求携带默认头
axios.defaults.baseURL = '/api';

//axios http request拦截器
axios.interceptors.request.use(config => {
  // axios({
  //     // url: '/goods-server/salaryUserAttr/selectByUser/00b24194dcdb424cb8c403d96875f442',
  //     url: "/goods-server/salaryUserAttr/selectByUser/00b24194dcdb424cb8c403d96875f442",
  //     method: 'get',
  //     headers: {
  //         'Content-type': 'application/json;charset=UTF-8'
  //     }
  // }).then(res => {
  //   console.log(res)
  // }).catch(error => {
  //     console.log(error)
  // })
  return config;
});

axios.interceptors.response.use(
  response => {
    const data = response.data;
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

createApp(App).use(store).use(router).mount('#app')
