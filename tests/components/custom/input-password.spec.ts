import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import InputPassword from '@/components/app/custom/InputPassword.vue'

describe('InputPassword.vue', () => {
  it('should render input password', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })

  it('should render input with label text', () => {
    const scenarios = ['Senha', 'Confirmar senha']

    scenarios.forEach((label) => {
      const wrapper = mount(InputPassword, {
        props: {
          label: label
        }
      })

      expect(wrapper.find('label').text()).toBe(label)
    })
  })
})
