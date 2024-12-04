<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Label>{{ label }}</Label>
    <Input type="password" />
  </div>
</template>
