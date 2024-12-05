type ValidationSchema = Array<Record<string, unknown>>

type EmitFunction = (event: string, payload: unknown) => void

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMultiStepForm(validationSchema: ValidationSchema, emit: EmitFunction) {
  const currentStepIdx = ref(0)

  const isLastStep = computed(() => currentStepIdx.value === validationSchema.length - 1)
  const hasPrevious = computed(() => currentStepIdx.value > 0)

  function onSubmit() {
    if (!isLastStep.value) {
      currentStepIdx.value++
    }
  }

  return {
    currentStepIdx,
    isLastStep,
    hasPrevious,
    onSubmit
  }
}
