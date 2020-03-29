import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../pages/Layout'

import Home from '../pages/Home'
import Decision from '../pages/Decision'
import Information from '../pages/Information'
import Login from '../pages/Login'
import Management from '../pages/Management'
import System from '../pages/System'

// import InformationCurrent from '../pages/Information/InformationCurrent'
// import InformationFullPeriod from '../pages/Information/InformationFullPeriod'
// import InformationThatYear from '../pages/Information/InformationThatYear'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children:[
        {
          path: '/',
          name: 'Home',
          component:Home,
          meta:{
            isLogin:true
          }
        },
        {
          path: '/decision',
          name: 'Decision',
          component:Decision
        },
        {
          path: '/information',
          name: 'Information',
          component:Information
        },
        {
          path: '/management',
          name: 'Management',
          component:Management
        },
        {
          path: '/system',
          name: 'System',
          component:System
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component:Login,
      meta:{
        isLogin:true
      }
    },
  ]
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(item => item.meta.isLogin)){
    next()
  }else{
    next({
      path:'/login'
    })
  }
})

export default router