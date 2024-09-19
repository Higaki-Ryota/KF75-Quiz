<template>
    <o-popup>
      <a-result-header />
      <a-result-detail :correct-count="correctCount" />
      <o-result-buttons :correct-count="correctCount" @select="emit('select')" />
    </o-popup>
  </template>
  
  <script setup lang="ts">
    type Props = {
      correctCount: number;
    };
    const props = defineProps<Props>();
    type Emit = {
      (event: "select"): void;
    };
    const emit = defineEmits<Emit>();
  </script>
  
  <style scoped lang="scss"></style>
  