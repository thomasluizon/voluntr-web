<script setup lang="ts">
import { EyeClosedIcon } from '@radix-icons/vue'

defineProps<{
  id: string
  label: string
}>()

const isVisible = ref(false)

defineExpose({
  isVisible
})
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Label :for="id">{{ label }}</Label>
   <div class="relative">
      <Input :id="id" type="password" />
      <button
        class="absolute inset-y-0 end-0 flex h-full w-10 items-center justify-center text-muted-foreground rounded-md outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-controls="password"
      >
        <EyeClosedIcon class="w-5 h-5" aria-hidden="true" />
    </button>
   </div>
  </div>
</template>
