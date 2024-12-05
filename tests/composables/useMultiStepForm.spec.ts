import { describe, it, expect, vi } from 'vitest'

import { useMultiStepForm } from '@/composables/useMultiStepForm'

describe('useMultiStepForm', () => {
  it('should initialize correctly with default values', () => {
    const validationSchema = [{}, {}, {}]
    const emitMock = vi.fn()

    const { currentStepIdx, isLastStep, hasPrevious } = useMultiStepForm(validationSchema, emitMock)

    expect(currentStepIdx.value).toBe(0)
    expect(isLastStep.value).toBe(false)
    expect(hasPrevious.value).toBe(false)
  })

  it('should move to the next step on submit', () => {
    const validationSchema = [{}, {}, {}]
    const emitMock = vi.fn()

    const { currentStepIdx, onSubmit } = useMultiStepForm(validationSchema, emitMock)

    onSubmit()

    expect(currentStepIdx.value).toBe(1)
  })

  it('should determinate when it is the last step', () => {
    const validationSchema = [{}, {}, {}]
    const emitMock = vi.fn()

    const { currentStepIdx, isLastStep } = useMultiStepForm(validationSchema, emitMock)

    currentStepIdx.value = 2

    expect(isLastStep.value).toBe(true)
  })
})
