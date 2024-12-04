<script setup lang="ts">
import { EyeClosedIcon, EyeOpenIcon } from '@radix-icons/vue'

defineProps<{
  id: string
  label: string
}>()

const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

defineExpose({
  isVisible
})
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Label :for="id">{{ label }}</Label>
    <div class="relative">
      <Input :id="id" :type="isVisible ? 'text' : 'password'" v-bind="$attrs" />
      <button
        class="absolute inset-y-0 end-0 flex h-full w-10 items-center justify-center text-muted-foreground rounded-md outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-controls="password"
        @click="toggleVisibility"
      >
       <component :is="isVisible ? EyeOpenIcon : EyeClosedIcon" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
