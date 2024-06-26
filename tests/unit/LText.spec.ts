import {  shallowMount,  VueWrapper } from '@vue/test-utils'
import { LText } from '../../src';

let wrapper: VueWrapper<unknown>
describe('Test LText Component', () => {
  it('show text word when component mounted', () => {
      wrapper = shallowMount(LText, {
        props: {
          text: 'hello'
        }
      })
      expect(wrapper.get('div').text()).toEqual('hello')
  });
})