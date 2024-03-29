import Vue from 'vue'
import Menu from '@/components/Menu'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  en: require('../../../static/i18n/en.json'),
  ja: require('../../../static/i18n/ja.json')
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})


describe('Menu', () => {

  it('sets the correct default data', () => {
    const Constructor = Vue.extend(Menu)
    const vm = new Constructor({i18n}).$mount()
    const defaultData = Menu.data()
    expect(defaultData.message).to.equal('hello!')
    expect(vm.$el.querySelector('#test-msg').textContent)
      .to.equal('BEM VINDO A BENJAMIN')
  })

})
