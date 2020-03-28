import Vue from 'vue'
import Router from 'vue-router'

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

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    }
  ]
})
