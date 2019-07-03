import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import Subscribe from '@/components/Subscribe.vue'

Vue.config.productionTip = false
Vue.component('menu-custom', Menu)
Vue.component('footer-custom', Footer)
Vue.component('subscribe-custom', Subscribe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
