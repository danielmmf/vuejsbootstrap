import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import Blank from '@/components/Blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
