import Vue from 'vue'
import Menu from '@/components/Menu'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'Porque você prefere a Benjamin ?'
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
  locale: 'en', // set locale
  messages, // set locale messages
})


describe('Menu', () => {

  // Avalia os resultados das funções
  // nas opções do componente
  it('sets the correct default data', () => {
   // expect(typeof Menu.data).toBe('function')
   const Constructor = Vue.extend(Menu)
    const vm = new Constructor({i18n}).$mount()
    const defaultData = Menu.data()
    expect(defaultData.message).to.equal('hello!')
    expect(vm.$el.querySelector('#test-msg').textContent)
      .to.equal('Porque você prefere a Benjamin ?')
  })

})
