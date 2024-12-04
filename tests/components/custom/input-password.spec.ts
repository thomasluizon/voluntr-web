import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import InputPassword from '@/components/app/custom/InputPassword.vue'

const factory = (props = {}) => {
  return mount(InputPassword, {
    props: {
      id: 'password',
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

  it('should render input with placeholder text', () => {
    const wrapper = factory({ placeholder: 'Digite sua senha' })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Digite sua senha')
  })

  it('should link label and input via for and id attributes', async () => {
    const wrapper = factory({ id: 'password' })

    const label = wrapper.find('label')
    const input = wrapper.find('input')

    expect(label.attributes('for')).toEqual('password')
    expect(input.attributes('id')).toEqual('password')
  })

  it('should render a button to toggle password visibility', async () => {
    const wrapper = factory()

    const button = wrapper.find('button')

    expect(button.exists()).toBe(true)
    expect(button.attributes('aria-controls')).toEqual('password')
  })

  it('should toggle password visibility when button is clicked', async () => {
    const wrapper = factory()

    const button = wrapper.find('button')
    const input = wrapper.find('input')

    await button.trigger('click')

    expect(input.attributes('type')).toEqual('text')
    expect(wrapper.vm.isVisible).toBe(true)

    await button.trigger('click')

    expect(input.attributes('type')).toEqual('password')
    expect(wrapper.vm.isVisible).toBe(false)
  })

  it('should pass extra attributes to the Input component via $attrs', () => {
    const wrapper = mount(InputPassword, {
      props: {
        id: 'password',
        label: 'Senha'
      },
      attrs: {
        'placeholder': 'Digite sua senha',
        maxLength: 20
      }
    })

    const input = wrapper.find('input')

    expect(input.attributes('placeholder')).toEqual('Digite sua senha')
    expect(input.attributes('maxlength')).toEqual('20')
  })
})
