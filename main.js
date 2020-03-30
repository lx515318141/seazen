// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Menu, Button } from 'element-ui';

import myCharts from './common/js/myCharts.js'
// 引入echarts中内置的地图信息
import '../node_modules/echarts/map/js/china.js'
import '../node_modules/echarts/map/js/world.js'
import api from "./api"


Vue.prototype.$api = api
Vue.use(myCharts) 
Vue.use(ElementUI);
// Vue.use(Menu)
// Vue.use(Button)
Vue.config.productionTip = false

// 赋值，将本地的token赋值给vuex的token
const localToken = localStorage.getItem("token")
const localUsername = localStorage.getItem("username")

if(localToken){
  store.commit("setToken",localToken)
  store.commit("setUser",localUsername)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
