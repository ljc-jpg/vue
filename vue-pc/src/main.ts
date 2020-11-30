import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

//请求携带默认头
axios.defaults.baseURL = '/api';

//axios http request拦截器
axios.interceptors.request.use(config => {
    // store.commit('setLoading', true)
    // let url = config.url;
    // let token = utils.getCookie('token') as string | null;
    //utils.setCookie('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImU2ODg1ZWFmMTQyMzRmMDVhY2QwYmRhOGFhNWE2MjVlIiwiZXhwIjoxNjA2Mzc5MDE3LCJ1c2VyIjoiY29tLmNsb3VkLm1vZGVsLlVzZXJANGY4MGY5ZTgifQ.b_E3f3C4ubconm_YvTTNVsxZmhmVyMIaUf8FJ4Lhxug')
    // if ((token) || (url?.match(RegExp(/login/)))) {
    //     utils.setCookie('token', token as string);
    // } else {
    //     router.push('login')
    // }
    return config;
});

// axios.interceptors.response.use(config => {
//     setTimeout(() => {
//       //store.commit('setLoading', false)
//     }, 1000)
//     return config
//   }, e => {
//     const { error } = e.response.data
//     store.commit('setError', { status: true, message: error })
//     store.commit('setLoading', false)
//     return Promise.reject(e.response.data)
//   })


// axios({
//     url: '/cas-server/user/selectByUser?userId=00b24194dcdb424cb8c403d96875f442',
//     method: 'get',
//     // data: qs.stringify({
//     //     'userId': '00b24194dcdb424cb8c403d96875f442'
//     // }),
//     headers: {
//         'Content-type': 'application/json;charset=UTF-8'
//     }
// }).then(res => {

// }).catch(error => {
//     console.log(error)
// })

createApp(App).use(store).use(router).mount('#app')
