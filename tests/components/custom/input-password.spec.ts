import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import InputPassword from '@/components/app/custom/InputPassword.vue'

const factory = (props = {}) => {
  return mount(InputPassword, {
    props: {
      label: 'Senha',
      ...props
    }
  })
}

describe('InputPassword.vue', () => {
  it('should render input password', () => {
    const wrapper = factory()
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('should render input with label text', () => {
    const scenarios = ['Senha', 'Confirmar senha']

    scenarios.forEach((label) => {
      const wrapper = factory({ label })
      expect(wrapper.find('label').text()).toBe(label)
    })
  })
})
