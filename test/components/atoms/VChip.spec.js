import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import VChip from '~/components/atoms/VChip'
const localVue = createLocalVue()
Vue.use(Vuetify)

describe('VChip', () => {
  test('props label will be passed to component', () => {
    const props = { label: 'label text' }
    const wrapper = mount(VChip, { localVue, propsData: props })
    expect(wrapper.props('label')).toBe(props.label)
  })

  test('default value of label should be empty string', () => {
    const wrapper = mount(VChip, { localVue })
    expect(wrapper.props('label')).toBe('')
  })
})
