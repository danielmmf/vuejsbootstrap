import Vue from 'vue'
import Menu from '@/components/Menu'


describe('Menu', () => {

  // Avalia os resultados das funções
  // nas opções do componente
  it('sets the correct default data', () => {
   // expect(typeof Menu.data).toBe('function')
    const defaultData = Menu.data()
    expect(defaultData.message).to.equal('hello!')
  })

})
