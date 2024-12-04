import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import InputPassword from '@/components/app/custom/InputPassword.vue'

describe('InputPassword.vue', () => {
  it('should render input password', () => {
    const wrapper = mount(InputPassword)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
  })
})
