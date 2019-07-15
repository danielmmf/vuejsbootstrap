import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/Menu.vue'
//import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
import Subscribe from '@/components/Subscribe.vue'
import Core from '@/components/Products/Apc.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.component('menu-custom', Menu)
//Vue.component('footer-custom', Footer)
Vue.component('slider-custom', Slider)
Vue.component('subscribe-custom', Subscribe)
Vue.component('core', Core)

const messages = {
  en: require('../static/i18n/en.json'),
  ja: require('../static/i18n/ja.json')
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
