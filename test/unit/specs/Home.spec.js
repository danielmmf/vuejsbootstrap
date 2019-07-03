import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('Deve testar o texto da Benjamin', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#test-whay').textContent)
      .to.equal('Porque você prefere a Benjamin ?')
  })
})
