
import { shallowMount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

test('someMethod should add numbers together', () => {
  const wrapper = shallowMount(HelloWorld)
  expect(wrapper.vm.getRandomInt(1)).toEqual(0)
})
