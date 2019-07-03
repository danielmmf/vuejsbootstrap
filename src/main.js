import Vue from 'vue'
import App from './App'
import router from './router'
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import Subscribe from '@/components/Subscribe.vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.component('menu-custom', Menu)
Vue.component('footer-custom', Footer)
Vue.component('subscribe-custom', Subscribe)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
