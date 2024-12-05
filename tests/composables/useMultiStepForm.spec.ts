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
})
