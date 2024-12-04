<script setup lang="ts">
defineProps<{
  id: string
  label: string
}>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Label :for="id">{{ label }}</Label>
    <Input :id="id" type="password" />
  </div>
</template>
