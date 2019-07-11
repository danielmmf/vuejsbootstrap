import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import Ecom from '@/components/Ecom/Default'
import Restaurant from '@/components/Ecom/Restaurant'
import Blank from '@/components/Blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Restaurant
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank
    },
    {
      path: '/ecom',
      name: 'Ecom',
      component: Ecom
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    }
  ]
})
